import os, requests
import logging
import common_utils

logging.basicConfig(level=logging.INFO)
LOGGER = logging.getLogger("Pipeline")

AZURE_ARM_API_HOST = 'https://management.azure.com/subscriptions/55861d01-1b9d-4920-a6ac-8f6669dd69d6/'

def get_azure_bearer_token():


    url = f'https://login.microsoftonline.com/{os.getenv("GOLD_DEMO_2_TENANT_ID")}/oauth2/token'
    LOGGER.info(url)
    
    payload = {
        'grant_type':'client_credentials',
        'client_id': os.getenv("GOLD_DEMO_2_CLIENT_ID"),
        'client_secret': os.getenv("GOLD_DEMO_2_SECRET"),
        'resource':'https://management.azure.com/'
    }
    
    LOGGER.info(payload)
    
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    
    # TODO: Fix: common_utils make_web_requests method doesn't support application/x-www-form-urlencoded as it uses json=payload instead of data=payload.
    response = requests.post(url, data=payload, headers=headers)
    
    if response.status_code >= 200 and response.status_code < 300:
        data = response.json()
        return data.get('access_token')
    
    return None


def change_secure_transport_flag(property_value='OFF', resource_group_name='', mysql_server_name=''):
    bearer_token = get_azure_bearer_token()
    headers = {
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + bearer_token
    }
    
    payload = {
        'properties': {
            'value': property_value
        }
    }
    
    url = AZURE_ARM_API_HOST + f'resourceGroups/{resource_group_name}/providers/Microsoft.DBforMySQL/flexibleServers/{mysql_server_name}/configurations/require_secure_transport?api-version=2023-06-30'
    
    response, isSuccessfulResponse, _ = common_utils.make_web_request(requestMethod=requests.put, url=url, headers=headers, payload=payload)

    return response, isSuccessfulResponse
    

def change_public_network_access(resource_group_name='', mysql_server_name=''):
    
    bearer_token = get_azure_bearer_token()
    headers = {
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + bearer_token
    }
    
    payload = {
        "properties": {
            "startIpAddress": "0.0.0.0",
            "endIpAddress": "255.255.255.255"
    }
}
    
    url = AZURE_ARM_API_HOST + f'resourceGroups/{resource_group_name}/providers/Microsoft.DBforMySQL/flexibleServers/{mysql_server_name}/firewallRules/AllowAllAzureServices?api-version=2023-06-30'
    
    response, isSuccessfulResponse, _ = common_utils.make_web_request(requestMethod=requests.put, url=url, headers=headers, payload=payload)
    
    return response, isSuccessfulResponse
  