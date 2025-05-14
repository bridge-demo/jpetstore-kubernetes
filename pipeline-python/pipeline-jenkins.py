import argparse
import os
import json
import logging
import requests
import build
from datetime import datetime
import uuid
import logging
from secure import Secure
import deployMonitoring
import build
from testpetstore import Tester
from deploy import Deploy
from common_utils import *
from emp_order_reader import read_petstore_order, is_db_ready
from mysql_security_configurations import *
import time

logging.basicConfig(level=logging.INFO)
LOGGER = logging.getLogger("Pipeline")
STATE_FILENAME = "jpetstore-pipeline-status.json"

def parser( validate_parameters = False ) -> dict:
    parser = argparse.ArgumentParser()

    parser.add_argument("-gt", "--github-token", help="<Optional> Github Token")
    parser.add_argument( '-du', "--docker-user", help='<Required> Docker username to access docker hub', required=True )
    parser.add_argument( '-dp', "--docker-password", help='<Required> Docker password to access docker hub', required=True )
    parser.add_argument( '-tn', "--tenant-url",  help='<Required> Tenant url  in the following format: "https://mcmp-explore-example.multicloud-ibm.com/"  ', required=True )
    parser.add_argument( '-uid', "--user-id",  help='<Required> User ID of the tenant"  ', required=True )
    parser.add_argument( '-ukey', "--user-api-key",  help='<Required> User api key of the tenant"  ', required=True )
    parser.add_argument( '-bt', "--build-token",  help='<Required> DevOps intellingence build token"  ', required=True )
    parser.add_argument( '-tt', "--test-token",  help='<Required> DevOps intellingence test token"  ', required=True )
    parser.add_argument( '-dt', "--deploy-token",  help='<Required> DevOps intellingence deploy token"  ', required=True )
    parser.add_argument( '-st', "--secure-token",  help='<Required> DevOps intellingence secure token"  ', required=True )
    parser.add_argument( '-dbu', '--db-user', help='<Required> DB User', required=True)
    parser.add_argument( '-dbp', '--db-password', help='<Required> DB Password', required=True)
    parser.add_argument( '-kc', '--kube-config', help='<Required> Kube Config', required=True)
    parser.add_argument( '-fn', '--fqdn', help='<Required> FQDN', required=True)
    parser.add_argument( '-dbur', '--db-url', help='<Required> DB url', required=True)
    parser.add_argument( '-dbn', '--db-name', help='<Required> DB name', required=True)
    parser.add_argument( '-rg', '--resource-group', help='<Required> Resource group', required=True)
    
    
    values = parser.parse_args()
    if validate_parameters:
        validate_parameters(values.__dict__)

    return values.__dict__

def validate_parameters(parameters: dict) -> dict:
    return {}


def main():
    
    parserValues = parser()
    pipelineParams = configure_pipeline_status( parserValues )
    tenantUrl = sanitazeTenantUrl(pipelineParams['tenant_url'])
    tenantAPIUrl = sanitazeTenantUrl(tenantUrl, urlType='api')
    
    
    # try:
    #     LOGGER.info( f'Processing: URL: {tenantAPIUrl} - API Key: {pipelineParams["user_api_key"]} - Order Number: {pipelineParams["order_number"]} - User ID: {pipelineParams["user_id"]}' )
    #     status, resource_group_name, db_name = is_db_ready(tenantApiUrl=tenantAPIUrl, tenantUserApikey=pipelineParams['user_api_key'], tenantUserId=pipelineParams['user_id'], orderNumber=pipelineParams["order_number"])
    #     LOGGER.info(f"IS DB READY? Status: {status} - RG: {resource_group_name} - DB Name: {db_name}")
    
    #     if status:
    #         petstore_details = read_petstore_order(tenantApiUrl=tenantUrl, tenantUserId=pipelineParams['user_id'], tenantUserApikey=pipelineParams['user_api_key'], orderNumber=pipelineParams['order_number'], createKubeconfigFile=False, kubeconfigFileName="tmp_kube_config")
        
    #         LOGGER.info("DB Details")
    #         LOGGER.info("petstore_details")
            
    #         if resource_group_name and db_name: 
            
    #             change_secure_transport_flag(resource_group_name=resource_group_name, mysql_server_name=db_name)
                
    #             time.sleep(60)
                
    #             change_public_network_access(resource_group_name=resource_group_name, mysql_server_name=db_name)
                
    #             time.sleep(60)
    #     else:
    #         logging.info(
    #         f"""The Services are not ready yet!!  """)
            
    # except Exception as error:
    #     logging.error(
    #         f"""Error:  {error}  """)
    # serviceDetails = {
    #     "db_user":"db_admin",
    #     "db_password":"Passw0rd1!",
    #     "tmp_kube_config":"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUU2RENDQXRDZ0F3SUJBZ0lRRk82dTlDeFVvbmZJcWxrTURKVjN3REFOQmdrcWhraUc5dzBCQVFzRkFEQU4KTVFzd0NRWURWUVFERXdKallUQWdGdzB5TlRBMU1EZ3hOak00TXpSYUdBOHlNRFUxTURVd09ERTJORGd6TkZvdwpEVEVMTUFrR0ExVUVBeE1DWTJFd2dnSWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUNEd0F3Z2dJS0FvSUNBUUM0CmJUeitWNWxlSWVreG9TQVRxRVliZy9WWGJQZlJRN09PQXpLM3RoZkIrNDl6N29lWDU4OTNZdGorY2RETUkySlUKdThqV2JrVTdnVDJFbm8yUHVmOHlOTzB1OGN2R05BSElUUzQxZ04vZVJyMHpNR3FSSE95MS9uNHlGcndqSE43OQppQUdZcCtjWm5FSlRlRWZEZ1lZbnhseWl4RHRKSk41L2J0QVYzMW5lSWs0RUtmQ2M0TWFQQTJ2NkhqWVVZQUdKCnhhOEVPY3BBUTRyQXZNWnpUMDVrSnU3NXRESnVKY3M1K1Q4T25oM0Nqbk1mc3hCN3M4TDBydnN3c2duc2lJUmwKTkg0WjFET1ptOWxGc3BtdFJINlQ3WlVEV2drQVZiQ0ZBM0pDclZyNzhvZkxFQ2FvNXFNcThWVG82NUhBK1RVWQpsV05JVHpKa0d1QUhRNHdtcVRLc2RYcFFuZ0Y0TmdLZFlxdlBNSktJTXRnM0hiRGJ1RFBEU3BxMzl6SVJJZjh1CkhQY1B4V3NjTEJNbUhKYi9QMnhUa09MMFZPS0JqekRUVzk0dEVaOGNhZERwWklyVDBDcTFic0NUNzBZaWI4WHcKUDhCSDFrZWZWUEtiS0xBTWMrUGpEVDcyS3VCM3lRaGYrTDN6TEZaYm9kd3NhUlpkTDZoOFFmRVRidTdXUlpXYQo5eitIYTlLNjIybmpiYmxLZVYwaFRpbkd5ZTZld0d2TE91R1NIK3dsN3NmTWpDRFZ0QnJ2MVNiTzJFTDZva2RGCkJ5RXB2M0xlazFTb0xCS2thcFJpeFR0Q2p4UWZaZFlnYzFwR0VkbU9qNWdremFBVmpReWxYeVNNd3VUVjN2VWgKVlI2OUUzUTMvQVNLRUMxWmlsSCtPZElWY3IzRUduOTY4MGMxeVhpS0RRSURBUUFCbzBJd1FEQU9CZ05WSFE4QgpBZjhFQkFNQ0FxUXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QWRCZ05WSFE0RUZnUVVVMXo1bzJsYlVEQ0tvYmtiCkUwWVEvMkg3MEZRd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dJQkFEdjYzSlNJRllCWkFMUGM3Ym55M3AxUlFWTDIKYXB1NWpLcTkzRkpWT2h4N1hONVVCMVo3azFjdzUrTmxCRjQzZ3pBcGlWcEdWNjdtYjhjWXhjR1FZZndPMzRzawpUbnluZmNtcU91a3RjRDdIWnNpWXNqdkl2cjFNd1JlY3NEb0F1ajg2RXltSFAwUmwwWDZYdTlXLzFYY3FNVUVPCk5sbTAzQXFTL2E3ck0raC9jZEVibG94VlI1MnJIakhGSDRWQy8zajRRVHU3ciswVHBCbEYzZ3RoZWdpL0krVEcKbU5CM1R2dU5jdjRXbDVQaXdjRVlSbFozc0tvYU5QZWM4OXoyYUpzdWJXdzZnc1hJMk9YTklVdGhmQUFidHFuawowSEVteDl6TnMxNWo5QURPYzA2QXNqeHNUUXpwODdLYStyUWZac1BHREZ4NjlmaXZLTU1jY1lERXNLZmYyK29xClVDV2wrKzBsRlJLaythSlpZTm9aRVFsVVpsT0cyeXduc1hJbUZsRytiMElJcE9od1ZmcmZwWTdXUmc2U0hVMU0KWEtxTnkxc2ZTNDVUVTZYL0FiWEJBNDVzeGUxVENueGhHeWlmT3J5dnZtVUh3YVkzMlpLMmU4YytUZ0VUeHVSRQoxZ1YrMmJkM2UzK0xZY2RuOHpuVkYyZmlZa0xRZEwrY3hFM090TXlSYWlBUzNoeUNqUmp5Vlh3QU40U3Z1TFhyCkp6WnU2OHJsSW9SSHo1OU5WWkduL3JXOTBKOEgzRlBQWkcxcDBrK1c5SnVCZG5BcDJWRGpKVlc4VWhVdlFNTkoKQkVUemtXb29DdkExS0pVSm0vZ0lvVlJqY2ZjR3diUUJ2VHU5b3hSWEd0Q0ZMNHNOYkptR3pQWitoVlBwcXdldApiOUxxV0FpanUyUFBNTEh4Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    server: https://akscluster-ozdorhhx.hcp.eastus.azmk8s.io:443\n  name: PetstoreAKS\ncontexts:\n- context:\n    cluster: PetstoreAKS\n    user: clusterUser_rg0802-343ea888-b4ea-93b6-e17d-5abd79a370ec_PetstoreAKS\n  name: PetstoreAKS\ncurrent-context: PetstoreAKS\nkind: Config\npreferences: {}\nusers:\n- name: clusterUser_rg0802-343ea888-b4ea-93b6-e17d-5abd79a370ec_PetstoreAKS\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUZIakNDQXdhZ0F3SUJBZ0lSQVBiL3JMdzBsUUZpMzlqeFFsaGhtd0F3RFFZSktvWklodmNOQVFFTEJRQXcKRFRFTE1Ba0dBMVVFQXhNQ1kyRXdIaGNOTWpVd05UQTRNVFl6T0RNMFdoY05NamN3TlRBNE1UWTBPRE0wV2pBdwpNUmN3RlFZRFZRUUtFdzV6ZVhOMFpXMDZiV0Z6ZEdWeWN6RVZNQk1HQTFVRUF4TU1iV0Z6ZEdWeVkyeHBaVzUwCk1JSUNJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBZzhBTUlJQ0NnS0NBZ0VBdkFqR3QraFZ3SndVSVp0bmFKeisKRHRaeTJkSTNPTjNwU2RDVE85U1VIemdlMEN5dzVwNzB6TEhsZmp0QkhwYU45eHozdE9QSW02NWx1ZEtFbDE3NwpQdG5vODNtS1pQMHROYTc2N3dSS1BHL3lycktBQ3RNWU52TFh1NlpwcnFHMDVCbm9jbEZVMndYSEVDQWhSY2NOCmFwalJ5RkhLWVdZT3NmRi9XTllxNFNteDVtbmcyOWZxTDJrT1J3ZlRmNERmQVl2NEd6eWtneWl6RzFGK1dVT3oKS0x2a1FBNFhzRVRPb1pSNFNJWktFd3Y5anRKMEZOMHlrSi9aTmFWU0w4dTNNYTRPZGVXVzRNTlcvYUlqbTJTQwpiZ1VveGNtMXlld1JpMDk3V0tCdHdCVkhIZ3lkZ3J4RExVTXVyUU5HQWpYanV4L0hGbnpDTHY3R1RJbnJyaFFCCkJ3Nm5rUGw4K3Fka2Z2MlVvY0RhS2FpU2RXallhdUdISFZvUERSSkpwcG5ielNDelZ3V0tmUjZKZlFkbVlkR1kKa2NvSEFNdkJmMWhzemdQaWRxY1YxQml5ZmZKNXJXNmNiQTNCTkpEWUtCby9maFhqQWR5SjdNLzRXeEROU1dtMApraWF4Q3Juc1JvVzlXaEplVUFzdnBiUUhDUWtDVVY4eXFTZXJCRVovOVI2YkV4MkRrV0w4dG1xTml0akpXVkU2CmlYdFJuaGZvQ2NqMlozL3JDemtkZ214aVZZNEFDTUw0VGpESDU5b2VjQ3JoNzU4ZkhIVTBIUUx4ZjBQWmpScEEKeTlXZDU5cTcwazhVZEN1MnlrTWkyU1pzZFY5QkthZ2FwREcwODlDUU1JeFpJbEEwdWVBTDZ5Z2ZTcFdDNFovLwpSWi8rbzR0d0Q2T0F4NGM5V2d0TkFaOENBd0VBQWFOV01GUXdEZ1lEVlIwUEFRSC9CQVFEQWdXZ01CTUdBMVVkCkpRUU1NQW9HQ0NzR0FRVUZCd01DTUF3R0ExVWRFd0VCL3dRQ01BQXdId1lEVlIwakJCZ3dGb0FVVTF6NW8ybGIKVURDS29ia2JFMFlRLzJINzBGUXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnSUJBS2Z5OG84c0hKZEF1eWtlMExrZgpnajY4aDFlSEpSeUc2cTBxL2U1QnBqNUZMVllTdGpoTHRsWFRjcy9JTEtTK2UxZnVsb2tPZ2MydnVabkFxeXc1ClJCQVBBS2tzYVFKKzlPUmlwTDdaNG1OdjRoRGtmRlVMTnpFcnJRcVVZeS90NVJOUWd3aGt2ZzQyZGxkaEtwbVcKTmYzR0x1S0tKZjI3N1VHVjRPczVIbVA2WjJ6UmRjL3g1Wmw2UjlXL2w0V2JwQWM1ZHBSWWtCSzdkam1IZDlyawpYR2x3cWJFSVpoMVh1Y3M0d0pWZ0U3UUxGOE9ZZUJqWXhXMFB2Mk05NUFtelhkME5QNDFwb2x4WHlteStpK1JLCnRpajY0Ymt6c1ZsNFJOQjQzMkcvV0VJWFJldnRiRlcxMmVWa0hqODZNaTI1d05DMTI4cDNLVWV6VWVuTmdscFAKVy80Mm44UENXMTZVdjc5VHpqelVNb1VkVGhNdmN4MjQxVHZRY1EyOGZlY24xTWNKQnFtTzkvQ3oreTFubXdJcgphNlBLTXBkcjZBMS9GNTd2ZGp6QjI2b1VURTc2NnhNdmtHM2xJWTgrUmJSRU1NaDBDdTF0Z3cyeEhGdnNsUFprCkdiMXBUNWZzWEVrTXZPQzVpd3AyeVQyR1hGT1BFWkNHcUFsK3JYbUdLL3dsWXZJOUEyQnJHdmozK1QwK3lnZ0EKQkkrcS9yUTBnT0RYSFB5d0s4MytUUG9jOWJhRW04OFB1KzRTZHRoWm9hZW1abUdTRTVtZGVWSXlWR1I3QUlZTgpPSVlBa21MZmE5KzFySFF6aUo2T09sZlRFODRBWmxoQnlYUkJ4WXFrU09ubGsxOGpwNDB1RVR0a1BEOGFsTUE3CjdCbjAvN2pWNlN3T3NlTGJaUzRGWnZ5TAotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==\n    client-key-data: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlKS1FJQkFBS0NBZ0VBdkFqR3QraFZ3SndVSVp0bmFKeitEdFp5MmRJM09OM3BTZENUTzlTVUh6Z2UwQ3l3CjVwNzB6TEhsZmp0QkhwYU45eHozdE9QSW02NWx1ZEtFbDE3N1B0bm84M21LWlAwdE5hNzY3d1JLUEcveXJyS0EKQ3RNWU52TFh1NlpwcnFHMDVCbm9jbEZVMndYSEVDQWhSY2NOYXBqUnlGSEtZV1lPc2ZGL1dOWXE0U214NW1uZwoyOWZxTDJrT1J3ZlRmNERmQVl2NEd6eWtneWl6RzFGK1dVT3pLTHZrUUE0WHNFVE9vWlI0U0laS0V3djlqdEowCkZOMHlrSi9aTmFWU0w4dTNNYTRPZGVXVzRNTlcvYUlqbTJTQ2JnVW94Y20xeWV3UmkwOTdXS0J0d0JWSEhneWQKZ3J4RExVTXVyUU5HQWpYanV4L0hGbnpDTHY3R1RJbnJyaFFCQnc2bmtQbDgrcWRrZnYyVW9jRGFLYWlTZFdqWQphdUdISFZvUERSSkpwcG5ielNDelZ3V0tmUjZKZlFkbVlkR1lrY29IQU12QmYxaHN6Z1BpZHFjVjFCaXlmZko1CnJXNmNiQTNCTkpEWUtCby9maFhqQWR5SjdNLzRXeEROU1dtMGtpYXhDcm5zUm9XOVdoSmVVQXN2cGJRSENRa0MKVVY4eXFTZXJCRVovOVI2YkV4MkRrV0w4dG1xTml0akpXVkU2aVh0Um5oZm9DY2oyWjMvckN6a2RnbXhpVlk0QQpDTUw0VGpESDU5b2VjQ3JoNzU4ZkhIVTBIUUx4ZjBQWmpScEF5OVdkNTlxNzBrOFVkQ3UyeWtNaTJTWnNkVjlCCkthZ2FwREcwODlDUU1JeFpJbEEwdWVBTDZ5Z2ZTcFdDNFovL1JaLytvNHR3RDZPQXg0YzlXZ3ROQVo4Q0F3RUEKQVFLQ0FnRUFrUXZNRG0xZ1NMV2RLZGR3eTFmZStwOGQ5VHlkY0hadDBJemVKbGJ5ODZvY3lzVE9xUGVSS3AxSAp4RG45SDVWUGFZR2s2cHFUVXRRU2tHYjk5SzVGN05PM1NLbEd3bVF5RGFrdTFGVmcxb0ljbC9vRm4xUDY1OWduCjVnNldreWtXR3FhSmtqVisyWHo1YzB6MW5aZlFsNXZPcDFIQVphV09UR0ZYdExWd1drUUpnUTNIY0k1N2pacmkKY3BSczUzd0hpbS9vTVVwME5PQ2VXTUppVG9WVW5HVmp5cTJVUkZxdmNpRFBNRksyclQ2Z2x4MXNnZk9uWDd5TwpsejB4eXNEQVRjaFFTMDJSTjB3M3ZHcm9RS1Fsb0t6R0tOeFNLTEs3VGRVLzlydTZMV084ZWtlTThSNDhTNXY1ClUyaWxCbXQvZ2djZlVnOW0wMDJndGNYbVVXQUk4WTlkUkpNQzhXMkZKZzN0ZXRtZVZqWE9kcUxHM1U2aHdUOSsKWXZ3ajFKTGZjaFVzTHJ1b2FUS1NwMjNwVEtTckdKNTJ5a0dtZ1BjcGM3Z1ZXeEFlcGpEdmtmSyt3WGZtVTBhbwprTFBaQTQ1bHZ2K3A1ZHVPWnZJNVA3SG9kV1ZQaXJ0OE5VUlNaOFhOM2N3enpWcGw4eGdrWjBqbTRDTloyQ3l1CjMzMllQaGtGNzJmdkd0cFNJYXhXeDN4WGZUdHBJSGVKeTh6MGZIbm0wdlh6ZEpyNjJucTJ5UkdQQThKbTVwYVcKY2REeGtIcjgrWitmUUN6emtGb2dGT1RkM2Y1dUt2a29mOWNlellZNzhlSldvdEhNOHdua0hEMFltNHI1b0FqcgpUZTRRbEc0T3B5QUlKSlY4YmhoV3pjSEVPUUhHS1A0aHlYdTdQTk9keHl5SkVTbTYrbEVDZ2dFQkFNeHlTZngxCmRSb2lzd2tWT0toSGFYN1hIUThmamJyNi95anlGdFVXeE5PaXZwYVZLem9aaXdRNjB0UnJaQStsUmx3SGVtMjUKVVFBMjFQV0loVUoranZaN1lyWGkzWjVTL0FrTkNLV01BZ1hxOEpodHM5akIxVnlGRk0yQmQ0OUcweFR1bjJzLwpDYmJDQXFsN1pPRjNhRTFRd0dLMzBremNBVlNQOUt0R2RqS003RzZaN3FSaVk0MnBqS085SkhHNnZYeUZSSC9ICitvaDhrSmIvWkkxMlROVUN2ZkFxWE1wQlBleGwzb3lIU2ZFVmxNZDF1RXZKY283RWJaQTQzT2w2Y1ZBNlYybUwKdU00anhSK1ZXRmo0T1Y5L3g3UU44ejZjQkkvTFhXU3BmeDZsb1M1UFN5dUVoUWxKN3lXeGxZaGp3ZnRtVEF5UQpTTmRNSHJzZG0rejdIdE1DZ2dFQkFPdHpCdFpzdWZYeDY4Zi9vbXgvQmNmYWZ2WWd4a1pESGhMNWhiZDZQUnBsCkVUcjZYcTF2MlBzYXRaUjA2QjFkZFNzak00OXhDbjV3N0JoSUFEWm8zNE41UElFOTVoeVhNKzkwM2JNOTJmRVUKT1Z5UEF2QzFyVDkwQ05KbXB0b1J5UzZNU0VoamxucVd1K3JnNThvV0tFakpkLzJINm9hNkloQjI4eEJha0ljawpVWk00ZnkyOWVpMHhCcHVMeWRQem81b3lsK0x0ZHN2ZVFJbm8zNHZEZFY0L0RZTW9XOE12dUpBblg4bU93WjBTCjFMekhNc2NXV3dYdTFDa1RaQ08xaTJRYUFFWnFQVzZLYWE1R0dnaWh6YnVRd2dvc2sxdGNSbTh2aThmSEgwMDMKUldLWW9WM0NVSGsxajMyZk1QQ01nRCtvV3hLNTJ2VXdsWUNaa2tBL1NvVUNnZ0VBQU1MY0s2aDBTeWlkNmdhKwpNMEl3emx3V3E1dStkMWUvNDNNalNwL1BFOHFqVXdRektRQTNXRWl2eUVLdUdMRFExajdnNGMreTBZRml3WmRFCmg3N1k0V29NTUFrc01nNjFDWU9XNktiZ3l3elk0SGhvRndLQnZOcHgvV0hpQkJLTGJxU0V5MjFzcDlXSkZRQjAKbTdKS0hSK1QxOG8vYWpIWGYyMFp5QmwzRHpFZklEcEtmU293bkxKbzU2TW9vNVBDYU5oR0xRT2RseXgvalZCZQpHM2k1U0lHK0cwck5GYU93aTFURncxZ3Rta3d1UlovV2s5R29MNGZqc0luRnFNamY2eUNNZXNRZWFBWVNFZEFJCmlDeEVhbXFiWDd3OWo1b2RHanZ6bVJCWWZOQzVET2NXckk3TnYvOGFlTlYwYlJHU0ExR2FMdUhLbzZLUTZybHQKZnpCZ0tRS0NBUUFCTDRFWFQxRFlaakZ6dmx2SkJCSzVZT1pHd3Y5OGx4WHRyb2YzMW91OE9Fb1A2L2JTRk1BWQo4NWQ2ZWVRNVVhRW5hSFA0QXUrMGwwajVEbFBCOG1FOXZqeUp3aEFJa05KWUlGU0ZkSWhHYUgycGM2Ym1JMlFOCjc3MmpvWlN4Z0dsczdKUG9tV2ZHa2orNy9RbnR3SkxQV3dSWnFIZUwyaUFWeVNPTUw0aU94YVlMZ2J0U05hUUoKMmpkWVRTbmxBVk1Qa2JXbUZPQUdRc1k4YTRuRW9HVlU1aWhoUXJERG1OZnJFZWV2a2lKemNnYlVOSVNTOEEvaApSY1NYdUZ0R3VzRks3YjZXbkM1WEFpZHFFenhLVXRaQVhZZzhtT0RkRXVmZjQzTm12Qi95T1pjRjJoTGw3L2FMCnhiTkZSS253YkNTeExWM1lDRXVMOUlTc014bkRiUTRwQW9JQkFRQ0hmaUhqTGJGODExS1BYNnBSdXRkK1VkL1cKeUNEM1JNZDBmQTRuR0cyVGw3cGxoeU1ZY25qWUNZU0JYTUozM1FDblUwMy8wMTU0cVNNOWhqeHV5VzMyYjVZWgpEekFFR1A2c1VVKzY1UU1rUW14Sll1b0ljSS9jdnhodXBtSE9qTVFCNlg0eFRNQkpjVDJkUy9PMXZBSC95OGFwCmZsZ01XOTdkQUZXOTE3d1hOMUtQSFM3dGJOL0M0UEJWUlJiUkM4M2JzN0dqZy9tb2NXaXBDUElQa1B4aXExNkkKcS9RRW05UnlDU1VKelFTR1F5RkUyeTVYei9YTSt6UFZpMDRRak9YajBKYlBtbXp2aERJNGV5dmNKdzFoNHNUMgoxZ1htdlJ1WjUzdk1uSzFjVmFaNnFieEZvMnk1UUJyQ0lndkY3TGlBMHVLWS9xR3J0d3pzeFkra1owUkoKLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS0K\n    token: i2etc5gbud1so6opzubq59xjg8b86d1lociiwdwjki8aljx5kw8j3rxbx9nhod2nopxw5wuv3rqlknt7p9bs366201w65r693dzfadu7bdylzj9rc9o3fv92tjj95ygg\n",
    #     "fqdn":"akscluster-ozdorhhx.hcp.eastus.azmk8s.io",
    #     "db_url":"mysqldb-18d315b1e2c3f3b1e7ca6b0c4e229048.mysql.database.azure.com",
    #     "db_name":"mysqldb-18d315b1e2c3f3b1e7ca6b0c4e229048",
    #     "resource_group":"rg0802-343ea888-b4ea-93b6-e17d-5abd79a370ec"
    # }
    LOGGER.info(f"KUBE CONFIG ---> {pipelineParams['kube_config']}")
    # Read kubeconfig as string
    with open(f"./{pipelineParams['kube_config']}", 'r') as f:
        kubeconfig_str = f.read()

    # Print or use the string
    LOGGER.info(f"KUBE CONFIG ---> {kubeconfig_str}")
    service_details = {
        "db_user": pipelineParams['db_user'],
        "db_password": pipelineParams['db_password'],
        "tmp_kube_config": kubeconfig_str,     
        "fqdn": pipelineParams['fqdn'],
        "db_url": pipelineParams['db_url'],
        "db_name": pipelineParams['db_name'],
        "resource_group": pipelineParams['resource_group']
    }
    tmp_file = open("tmp_kube_config", "w")
    tmp_file.write(kubeconfig_str.replace('\n', '\\n'))
    tmp_file.close()

    # change_secure_transport_flag(resource_group_name=pipelineParams['resource_group'], mysql_server_name=pipelineParams['db_name'])         
    # time.sleep(60)
    # change_public_network_access(resource_group_name=pipelineParams['resource_group'], mysql_server_name=pipelineParams['db_name'])
        
    # LOGGER.info( json.dumps( pipelineParams, indent=3 ) )
    # buildUrl =  f"{os.getenv('BUILD_URL', 'http://13.82.103.214:8080/view/RedThread/job/redthread-petstore-deployment-template/71/console')}console"

        
    # error = update_completed_order_status( 
    #     tenantUrl=tenantUrl, 
    #     userID=pipelineParams['user_id'], 
    #     userApiKey=pipelineParams['user_api_key'], 
    #     orderNumber=pipelineParams["order_number"],   
    #     fulfillmentId=pipelineParams["fulfillment_id"],
    #     buildUrl=buildUrl
    # )
    # if error:
    #     LOGGER.error("Fail to update order status")

    petstore_pipeline(params=pipelineParams)
        
        
   
def update_completed_order_status( tenantUrl:str, userID:str, userApiKey:str, orderNumber: str, fulfillmentId:str, buildUrl:str ):
    """
    This function will return an error string only in case of failure
    """
    
    LOGGER.info("Update_completed_order_status")
    ##If status file is not json valid create a new one and rename the existing one to .old

    tenantUrl = sanitazeTenantUrl(tenantUrl)
    endpointUrl = f"{tenantUrl}consume/api/fulfillment/prov_posthook_response"
    bearer_token = get_bearer_token(tenantUrl=tenantUrl, apikey=userApiKey, subject=userID)
    headers = {
       'Authorization': f"Bearer {bearer_token}",
    }

    payload = {
        "additionalMessage":f"Provisioning Completed. Check build {buildUrl} console",
        "comments":"Provisioned Completed.",
        "orderNumber": orderNumber,
        "serviceFulfillmentId": fulfillmentId,
        "status":"ProvisionCompleted",
        "version":""
    }

    response, operationSuccess, errorMessage = make_web_request( url=endpointUrl, headers=headers, payload=payload, requestMethod=requests.post )
    if not operationSuccess:
        return f'Unable to update order status "{orderNumber}, with the credentials provided"\nError: "{errorMessage}"' 
    
    return None



def petstore_pipeline(  params: dict  ):
    
    

    fullWebImageName = f"{params['docker_user']}/jpetstore-web:latest"
    fullDBImageName = f"{params['docker_user']}/jpetstore-db:latest"
    technicalServiceName = "RT_petstore_on_aks_jenkins"

    LOGGER.info("Building pestore web image")
    result = build_petstore( 
        dockerFileDirectory="../jpetstore",
        dockerUser=params['docker_user'], 
        dockerPassword=params['docker_password'], 
        fullImageName=fullWebImageName, 
        tenantUrl=params['tenant_url'], 
        buildToken=params['build_token'], 
        publishToTenant=True,
        pushToDockerRepo=True,
        technicalServiceName=technicalServiceName
        )

    LOGGER.info("Building pestore db image")
    result = build_petstore( 
        dockerFileDirectory="../",
        dockerUser=params['docker_user'], 
        dockerPassword=params['docker_password'], 
        fullImageName=fullDBImageName,
        tenantUrl=params['tenant_url'],
        buildToken=params['build_token'],
        publishToTenant=True,
        pushToDockerRepo=True,
        technicalServiceName=technicalServiceName
        )
    LOGGER.info("testing pestore")

    result = test_petstore( 
        tenantUrl=params["tenant_url"], 
        testToken=params["test_token"], 
        technicalServiceName=technicalServiceName 
    )
    
    tenantApiUrl = sanitazeTenantUrl(tenantUrl=params["tenant_url"], urlType="api")
    LOGGER.info("deploying pestore")
    result = deploy_Petstore( 
        dockerUser=params["docker_user"],
        imageTag="latest",
        tenantUserID=params["user_id"],
        tenantUserApiKey=params["user_api_key"],
        tenantApiURL=tenantApiUrl,
        orderNumber="",
        deployToken=params["deploy_token"],
        publishToTenant=True,
        params= params
     )

    #secure_Petstore(tenantUrl=params["tenant_url"], secureToken=params["secure_token"])
    successfulOperation = deployMonitoring.deploy_petstore_monitoring()
    if not successfulOperation:
        LOGGER.error("Unable to install monitoring")


def configure_pipeline_status( newValues: dict ):

    #TODO we can apply the same logic of the order number here to any missing parameter so that the file state can wor as a backup

    #verify if the file already exists
    if not os.path.exists( STATE_FILENAME ):
        LOGGER.info(f"{STATE_FILENAME} doesnt exist, creating it...")
        write_to_file( STATE_FILENAME, json.dumps(newValues) )
        return newValues
    
    
    LOGGER.info("State file already exists, comparing parameters")

    fileContent = read_state_file( STATE_FILENAME )
    LOGGER.info(f"File state content ({STATE_FILENAME}):")
    # LOGGER.info(fileContent)
    dictFileContent = json.loads( fileContent )

    orderIsempty = newValues['order_number'] == ""
    fulfillmentIsEmpty = newValues['fulfillment_id'] == ""

    if orderIsempty:
        LOGGER.info("Order is number is empty, reading order_nubmer and fulfillment_id values from state file")
        newValues["order_number"] = dictFileContent['order_number']
        newValues["fulfillment_id"] = dictFileContent["fulfillment_id"]

        return newValues

    elif not orderIsempty and not fulfillmentIsEmpty :
        #if  order number and fulfillment id overwrite the file
        LOGGER.info(f"updating {STATE_FILENAME} " )
        write_to_file( STATE_FILENAME, json.dumps(newValues) )
        LOGGER.info("DONE")
        return newValues         
    
    
    else:
        LOGGER.error("To use a new petstore infrasturcture you are required to send the fulfillment_id and order_number, otherwise the old values from state file will be used")
        LOGGER.warning("Using the old values from the state file")
        return dictFileContent
    #if this fails return the values and show a warning that we are not saving the status 
    #if posible write a log


def write_to_file( fileName:str, content:str ) -> str:
    try:
        file = open( fileName, "w+" )
        file.write(content)
        file.close()
        return None

    except BaseException as error:
        LOGGER.error(f"Fail to write {STATE_FILENAME}, \nError: {error}  ")
        return error

def read_state_file(fileName: str):
    #TODO verify the file is json valid

    try:
        file = open(STATE_FILENAME, 'r')
        fileContent = file.read()
        file.close()
        
        return fileContent

    except BaseException as error:
        LOGGER.error(  f"Fail to read file {STATE_FILENAME}, \n if this error persists delete the file and send all parameters to the pipeline"  )
        raise Exception(f"Unable to read '{STATE_FILENAME}'\nError: {error} ")

def build_petstore( dockerFileDirectory=".", dockerUser="", dockerPassword="", fullImageName="", tenantUrl="", buildToken="", publishToTenant=False, pushToDockerRepo=False, technicalServiceName="RT_petstore_on_aks_jenkins" ):

    LOGGER.info("Building Petstore")
    petstoreBuild = build.Builder( buildId=uuid.uuid4().__str__(), tecnicalServiceName=technicalServiceName )
    startTime = datetime.now()
    LOGGER.info(f"Petstore Build: {petstoreBuild}")
    petstoreBuild.create_docker_image( dockerFileDirectory=dockerFileDirectory, imageName=fullImageName )
    
    LOGGER.info(f"Petstore Docker Image created")
    if pushToDockerRepo:
        if not dockerUser or not dockerPassword:
            raise Exception("Error:build_petstore: dockerUser and dockerPassword are required for publishment")
        petstoreBuild.login_to_docker( dockerUser=dockerUser, dockerPassoword=dockerPassword )
        petstoreBuild.upload_docker_image( fullImageName )
    if publishToTenant:
        if not tenantUrl or not buildToken:
            raise Exception("Error:build_petstore: tenantUrl and buildToken are required for publishment")
        tenantUrl = sanitazeTenantUrl( tenantUrl )
        petstoreBuild.post_data_into_tenant(buildToken=buildToken, tenantUrl=tenantUrl)

    duration =   datetime.now() - startTime
    SecondsDuration = duration.total_seconds()
    if petstoreBuild.build_status == "failed":
        LOGGER.error(f"Fail to build {fullImageName}")
        exit(1)

def test_petstore( tenantUrl, testToken, technicalServiceName ):
    tester = Tester()
    tester.run_test()
    try:
        tester.publish_test(
            tenantUrl=tenantUrl,
            testToken=testToken,
            technicalServiceName=technicalServiceName
        )
    except:
        LOGGER.error("Error: Fail to publish test data")
        # LOGGER.info(tester.__dict__)

    
def deploy_Petstore( tenantUserID,  tenantUserApiKey, tenantApiURL,  orderNumber, deployToken="", imageTag="latest", dockerUser="mcmpdemo",publishToTenant=False, params={}):
    deployment = Deploy()
    deployment.deploy_petstore (
        dockerUser=dockerUser,
        imageTag=imageTag,
        tenantUserID=tenantUserID,
        tenantUserApiKey=tenantUserApiKey,
        tenantApi=tenantApiURL,
        orderNumber=orderNumber,
        params= params
    )
    tenantUrl = sanitazeTenantUrl(tenantApiURL)

    if publishToTenant:
        if not deployToken:
            raise Exception("deploy_Petstore: deployToken needed to publish data to tenant")
        deployment.post_data_into_tenant( tenantUrl=tenantUrl, deployToken=deployToken )

    if deployment.status.lower() == "failure":
        exit(1)

def secure_Petstore( tenantUrl, secureToken ):
    secure = Secure()
    publishSLSuccessful = secure.publish_secure_licenses( tenantUrl, secureToken )
    publishVSSuccessful = secure.publish_vulnerability_scan( tenantUrl, secureToken )
    if publishSLSuccessful and publishVSSuccessful:
        return True
    return False


if __name__ == "__main__":
    main()
"""
Nex step  is to test the oreder status function and continue with the pipeline
"""