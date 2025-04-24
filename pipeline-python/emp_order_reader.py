import os, requests
import common_utils
import logging

logging.basicConfig(level=logging.INFO)
LOGGER = logging.getLogger("OrderReader")


##TODO: We can wrap all this into a orderReader class

def get_order_details(tenant_user_id, tenant_system_user_api_key, order_number, tenant_api_url, maxRetries=4, currentReties=0):
    """
    Returns a dictionary with 'db_password', 'service_instance_id' keys.
    Ends the process if an error occurs
    """
    LOGGER.info("Reading order Details --")
    # ENDPOINT = f"{tenant_api_url}v5/api/orders/{order_number}/detail"
    ENDPOINT = f"{tenant_api_url}consume/v5/api/orders/{order_number}/detail"

    bearerToken = common_utils.get_bearer_token(tenantUrl=tenant_api_url, apikey=tenant_system_user_api_key, subject=tenant_user_id)
    headers = {
        # "username": tenant_user_id, 
        # "apikey": tenant_system_user_api_key
        'Authorization': f"Bearer {bearerToken}",
    }
    response, isSuccessfulResponse, _  = common_utils.make_web_request( requestMethod=requests.get, headers=headers, url=ENDPOINT )
    
    serverTimeout = response.status_code == 504

    if serverTimeout:
        LOGGER.warning("Warning: Time out getting petstore service instance id")
        currentReties += 1
        if currentReties <= maxRetries:
            get_order_details( tenant_user_id, tenant_system_user_api_key, order_number, tenant_api_url, maxRetries, currentReties )
    
        else:
            LOGGER.error(f"Fail to get service instance id, max retries reached '{maxRetries}'")
            exit(1)
    
    if not isSuccessfulResponse:
        LOGGER.error("Error: Fail to get service instance id")
        exit(1)
    
    isValidJson = common_utils.validateJSON( response.text )
    if not isValidJson:
        LOGGER.error(f"Error: Expecting a json response from {ENDPOINT} and got:\n{response.text}")
        exit(1)
    data = response.json()
    details = parse_petstore_order_details( data )
    LOGGER.info("Done reading order Details")
    return details


def parse_petstore_order_details(jsonData):
    """
    params:
        jsonData(dict): json response body of '{tenant_api_url}v5/api/orders/{order_number}/detail' 

    returns: 
        Dictionary with 'db_password', 'service_instance_id' keys.
        **In case of failure it exits the process**
    """
    try:
        data = {}
        data["service_instance_id"] = jsonData["data"]["orderItems"][0]["services"][0]["serviceInventoryId"]
        
        #Get the database password
        configs = jsonData["data"]["orderItems"][1]["configInfo"]
        
        for c in configs:
            if "parameters" in str(c["configGroup"]):
                inputs = c["config"]
        
        for param in inputs:
            if param["configId"] == "serverPassword":
                data["db_password"] = param["values"][0]["value"]

        return data

    except:
        LOGGER.error("Error: Fail to parse petstore order details (parse_petstore_order_details)")
        LOGGER.error(f"Data to parse: \n{jsonData}")
        exit(1)


def get_petstore_service_instance_details( tenant_system_user_id, tenant_system_user_api_key, service_instance_id, tenant_api_url, maxRetries=4, currentReties=0 ):
    
    LOGGER.info("Reading service instace details")
    ENDPOINT = f"{tenant_api_url}v3/api/services/azure/{service_instance_id}"
    headers = {
        "username": tenant_system_user_id, 
        "apikey": tenant_system_user_api_key
    }
    response, isSuccessfulResponse, _  = common_utils.make_web_request( requestMethod=requests.get, url=ENDPOINT, headers=headers )
    timeOutError = response.status_code == 504
    if timeOutError:
        LOGGER.warning("Warning: Time out getting petstore service instance details")
        if currentReties >= maxRetries:
            LOGGER.error(f"Error: time out error, tried {currentReties} times")
            exit(1)
        currentReties += 1
        LOGGER.info("Retrying to get petstore service instance details")
        get_petstore_service_instance_details( tenant_system_user_id, tenant_system_user_api_key, service_instance_id, tenant_api_url, currentReties=currentReties)
    
    if not isSuccessfulResponse:
        LOGGER.error("Error:  'get_petstore_service_instance_details' func was unable to get a successful response")
        exit(1)
    
    isValidJson = common_utils.validateJSON( response.text )
    if not isValidJson:
        LOGGER.error(f"Error: Expecting a json response from {ENDPOINT} and got:\n{response.text}")
        exit(1)

    data = response.json()
    
    details = parse_service_instance_details(data)
    LOGGER.info("Done reading service instance details")

    return details


def parse_service_instance_details( jsonData ):
    fqdn = ""
    kubeconfig = ""
    db_url = ""
    db_user = ""
    LOGGER.info(f"Number of resources in order: {len(jsonData['resources'])}" )

    for resouce in jsonData["resources"]:
        # Get kubeconfig infor and FQDN
        if resouce["resourceType"] == "azurerm_kubernetes_cluster":
            for output in resouce["templateOutputProperties"]:

                if output["name"] == "Http Application Routing Zone Name":
                    fqdn = output["value"]

                if output["name"] == "Kube Config Raw":
                    kubeconfig = output["value"]
                    

        # Get database user, password and url
        if resouce["resourceType"] == "azurerm_mysql_server":

            for output in resouce["templateOutputProperties"]:

                if output["name"] == "Fqdn":
                    db_url = output["value"]
                if output["name"] == "Administrator Login":
                    db_user = output["value"]

    db_user = db_user + "@" + db_url
    
    response = {
        "tmp_kube_config": kubeconfig,
        "fqdn": fqdn,
        "db_url": db_url,
        "db_user": db_user,
    }
    
    LOGGER.info(f"Order details parsed: {response} ")

    return response


def get_order_details_for_service_chaining(tenant_user_id, tenant_system_user_api_key, order_number, tenant_api_url, maxRetries=4, currentReties=0):
    """
    Returns a dictionary with 'db_password', 'service_instance_id' keys.
    Ends the process if an error occurs
    """
    LOGGER.info("Reading order Details---------")
    # LOGGER.info("fetch bearer token ---  ")
    # ENDPOINT = f"{tenant_api_url}v5/api/orders/{order_number}/detail"
    
    # LOGGER.info("fetch bearer token %s",tenant_api_url )
    tenantApiUrl = common_utils.sanitazeTenantUrl(tenant_api_url)
    bearerToken = common_utils.get_bearer_token(tenantUrl=tenantApiUrl, apikey=tenant_system_user_api_key, subject=tenant_user_id)
    tenantApiUrl = common_utils.sanitazeTenantUrl(tenant_api_url)
    ENDPOINT = f"{tenantApiUrl}consume/v5/api/orders/{order_number}/detail"
    # PROD ENDPOINT = f"{tenantApiUrl}consume/v5/api/orders/{order_number}/detail"
    headers = {
        # "username": tenant_user_id, 
        # "apikey": tenant_system_user_api_key
        'Authorization': f"Bearer {bearerToken}",
    }
    # headers = {
    #     "username": tenant_user_id, 
    #     "apikey": tenant_system_user_api_key
    # }
    response, isSuccessfulResponse, _  = common_utils.make_web_request( requestMethod=requests.get, headers=headers, url=ENDPOINT )
    
    serverTimeout = response.status_code == 504

    if serverTimeout:
        LOGGER.warning("Warning: Time out getting petstore service instance id")
        currentReties += 1
        if currentReties <= maxRetries:
            get_order_details_for_service_chaining( tenant_user_id, tenant_system_user_api_key, order_number, tenant_api_url, maxRetries, currentReties )
    
        else:
            LOGGER.error(f"Fail to get service instance id, max retries reached '{maxRetries}'")
            exit(1)
    
    if not isSuccessfulResponse:
        LOGGER.error("Error: Fail to get service instance id")
        exit(1)
    
    isValidJson = common_utils.validateJSON( response.text )
    if not isValidJson:
        LOGGER.error(f"Error: Expecting a json response from {ENDPOINT} and got:\n{response.text}")
        exit(1)
    data = response.json()
    #print(data) #Prints the entire JSON response
    details = parse_petstore_order_details_for_service_chaining( data )
    LOGGER.info("Done reading order Details")
    LOGGER.info(details)
    
    return details


def parse_petstore_order_details_for_service_chaining(jsonData):
    try:
        service_instance_path_1 = '$.data.orderItems[0].services[:1].serviceInventoryId'
        service_instance_path_2 = '$.data.orderItems[1].services[:1].serviceInventoryId'
        service_instance_path_3 = '$.data.orderItems[2].services[:1].serviceInventoryId'
        db_user_path = '$.data.orderItems[?(@.serviceOfferingName=~"Azure Database for MySQL - Flexible Server V2")].configInfo[?(@.configGroupCode=="Azurerm mysql flexible server dbdepl")].config[?(@.configId=="server_user")].values[0].value'
        db_password_path = '$.data.orderItems[?(@.serviceOfferingName=~"Azure Database for MySQL - Flexible Server V2")].configInfo[?(@.configGroupCode=="Azurerm mysql flexible server dbdepl")].config[?(@.configId=="serverPassword")].values[0].value'
        data = {}
        data["service_instance_id"] = common_utils.get_value_from_dict(jsonData, service_instance_path_1)
        data["service_instance_id2"] = common_utils.get_value_from_dict(jsonData, service_instance_path_2)
        data["service_instance_id3"] = common_utils.get_value_from_dict(jsonData, service_instance_path_3)
        data["db_user"] = common_utils.get_value_from_dict(jsonData, db_user_path)
        data["db_pass"] = common_utils.get_value_from_dict(jsonData, db_password_path)
        
        print("parse_petstore_order_details_for_service_chaining --- >", data)

        return data

    except:
        LOGGER.error("Error: Fail to parse petstore order details (parse_petstore_order_details)")
        LOGGER.error(f"Data to parse: \n{jsonData}")
        exit(1)


def get_petstore_service_chaining_details(tenant_system_user_id, tenant_system_user_api_key, service_instance_id, service_instance_id2, tenant_api_url):

    LOGGER.info("Reading service instance details ----------")
    tenant_api_url = common_utils.sanitazeTenantUrl(tenant_api_url)
    ENDPOINT = f"{tenant_api_url}consume/v3/api/services/azure/{service_instance_id}"
    ENDPOINT2 = f"{tenant_api_url}consume/v3/api/services/azure/{service_instance_id2}"
    bearerToken = common_utils.get_bearer_token(tenantUrl=tenant_api_url, apikey=tenant_system_user_api_key, subject=tenant_system_user_id)
    headers = {
       'Authorization': f"Bearer {bearerToken}",
    }

    response, isSuccessfulResponse, _  = common_utils.make_web_request(requestMethod=requests.get, url=ENDPOINT, headers=headers)
    response2, isSuccessfulResponse2, _ = common_utils.make_web_request(requestMethod=requests.get, url=ENDPOINT2, headers=headers)

    timeOutError = response.status_code == 504
    if timeOutError:
        LOGGER.warning("Warning: Time out getting petstore service instance details")
    
    if not isSuccessfulResponse or not isSuccessfulResponse2:
        LOGGER.error("Error:  'get_petstore_service_instance_details' func was unable to get a successful response")
        exit(1)
    
    isValidJson = common_utils.validateJSON( response.text )
    if not isValidJson:
        LOGGER.error(f"Error: Expecting a json response from {ENDPOINT} and got:\n{response.text}")
        exit(1)
    
    isValidJson = common_utils.validateJSON( response2.text )
    if not isValidJson:
        LOGGER.error(f"Error: Expecting a json response from {ENDPOINT} and got:\n{response2.text}")
        exit(1)

    data = response.json()
    data2 = response2.json()
    
    details = parse_service_chaining_details(data, data2)
    LOGGER.info("Done reading service instance details")
    LOGGER.info(details)

    return details


def parse_service_chaining_details(jsonData, jsonData2):
    kubeconfig = ""
    kubenetes_fqdn = ""
    fqdn = ""
    db_url = ""
    db_name = ""
    resource_group = ""
    #LOGGER.info(f"Number of resources in order: {len(jsonData['resources'])}" )
    LOGGER.info(f"JSONDATA1 -->", jsonData2)
    LOGGER.info(f"JSONDATA2 -->", jsonData2)
    for resouce in jsonData["resources"]:
        if resouce["resourceType"] == "azurerm_kubernetes_cluster":
            for output in resouce["templateOutputProperties"]:
                if output["name"] == "Kube Config Raw":
                    kubeconfig = output["value"]

    for resouce in jsonData["resources"]:
        if resouce["resourceType"] == "azurerm_kubernetes_cluster":
            for output in resouce["templateOutputProperties"]:
                if output["name"] == "Http Application Routing Zone Name":
                    kubenetes_fqdn = output["value"]


    for resouce in jsonData2["resources"]:
        if resouce["resourceType"] == "azurerm_mysql_flexible_server":
            for output in resouce["templateOutputProperties"]:
                if output["name"] == "Fqdn":
                    fqdn = output["value"]
                elif output["name"] == "Name":
                    db_name = output["value"]
                elif output["name"] == "Resource Group Name":
                    resource_group = output["value"]


    return {
        "tmp_kube_config": kubeconfig,
        "fqdn": kubenetes_fqdn,
        "db_url": fqdn,
        "db_name": db_name,
        "resource_group": resource_group
    }


def package_all_details(tenant_system_user_id, tenant_system_user_api_key, order_number, service_instance_id, service_instance_id2, tenant_api_url):
    details = {}
    
    order_details = get_order_details_for_service_chaining("65aeaef69cdb7a2d802758e3","74fb2400-acf8-59ad-b720-ead3d65d8d1e","73C4THFBDG","https://acmecorporation-eu-6531be7cc4ddf57e21615d54-api.bridge.kyndryl.com/", maxRetries=4, currentReties=0)
    service_details = get_petstore_service_chaining_details("65aeaef69cdb7a2d802758e3","74fb2400-acf8-59ad-b720-ead3d65d8d1e","87W7NES6Q2", "XJ59RZ429G", "https://acmecorporation-eu-6531be7cc4ddf57e21615d54-api.bridge.kyndryl.com/")

    details = order_details
    details.update(service_details)

    return details


def read_petstore_order( tenantApiUrl, tenantUserId, tenantUserApikey, orderNumber, createKubeconfigFile=False, kubeconfigFileName="tmp_kube_config" ):
    tenantApiUrl = common_utils.sanitazeTenantUrl(tenantApiUrl)
    # orderDetails = get_order_details(
    #    tenant_api_url=tenantApiUrl,
    #    tenant_system_user_api_key=tenantUserApikey,
    #    tenant_user_id=tenantUserId,
    #    order_number=orderNumber
    # )

    # serviceDetails = get_petstore_service_instance_details(
    #    tenant_api_url=tenantApiUrl,
    #    tenant_system_user_id=tenantUserId,
    #    tenant_system_user_api_key=tenantUserApikey,
    #    service_instance_id=orderDetails['service_instance_id']
    # )

    orderDetails = get_order_details_for_service_chaining(
        tenant_user_id=tenantUserId,
        tenant_system_user_api_key=tenantUserApikey,
        order_number=orderNumber,
        tenant_api_url=tenantApiUrl
    )

    serviceDetails = get_petstore_service_chaining_details(
        tenant_system_user_id=tenantUserId,
        tenant_system_user_api_key=tenantUserApikey,
        service_instance_id=orderDetails["service_instance_id"],
        service_instance_id2=orderDetails["service_instance_id2"],
        tenant_api_url=tenantApiUrl
    )

    if createKubeconfigFile:
        tmp_file = open(kubeconfigFileName, "w")
        tmp_file.write(serviceDetails['tmp_kube_config'])
        tmp_file.close()

    return {
            "tmp_kube_config": serviceDetails['tmp_kube_config'],
            "fqdn": serviceDetails['fqdn'],
            "db_url": serviceDetails['db_url'],
            "db_user": orderDetails['db_user'],
            "db_password": orderDetails['db_pass'],
            "resource_group":serviceDetails['resource_group'],
            "db_name":serviceDetails['db_name']
        }


# Reviews all Service Inventory IDs associated with the order and returns True when the DB is ready to be pre-configured, along with the DB Name and Resource Group.
def is_db_ready(tenantApiUrl, tenantUserId, tenantUserApikey, orderNumber):
    order_details = get_order_details_for_service_chaining(tenant_api_url=tenantApiUrl, tenant_user_id=tenantUserId, tenant_system_user_api_key=tenantUserApikey, order_number=orderNumber)
    print(order_details["service_instance_id"])
    
    if order_details and order_details["service_instance_id"] and order_details["service_instance_id2"]:
        LOGGER.info("Reading service instance details --- ")
        tenantApiUrl = common_utils.sanitazeTenantUrl(tenantApiUrl)
        ENDPOINT = f'{tenantApiUrl}consume/v3/api/services/azure/{order_details["service_instance_id"]}'
        ENDPOINT2 = f'{tenantApiUrl}consume/v3/api/services/azure/{order_details["service_instance_id2"]}'
        ENDPOINT3 = f'{tenantApiUrl}consume/v3/api/services/azure/{order_details["service_instance_id3"]}'
        
        bearerToken = common_utils.get_bearer_token(tenantUrl=tenantApiUrl, apikey=tenantUserApikey, subject=tenantUserId)
        resource_type_path = '$.resources[0].resourceType'
        status_path = '$.resources[0].status'
        resource_group_name_path = '$.resources[0].templateOutputProperties[?(@.name == "Resource Group Name")].value'
        db_name_path = '$.resources[0].templateOutputProperties[?(@.name == "Name")].value'
        resource_group_name = ''
        db_name = ''
        headers = {
            'Authorization': f"Bearer {bearerToken}",
        }
        
        response, isSuccessfulResponse, _  = common_utils.make_web_request(requestMethod=requests.get, url=ENDPOINT, headers=headers)
        response2, isSuccessfulResponse2, _ = common_utils.make_web_request(requestMethod=requests.get, url=ENDPOINT2, headers=headers)
        response3, isSuccessfulResponse3, _ = common_utils.make_web_request(requestMethod=requests.get, url=ENDPOINT3, headers=headers)
        
        if isSuccessfulResponse and common_utils.get_value_from_dict(response.json(), resource_type_path) == 'azurerm_mysql_flexible_server':
            LOGGER.info(order_details["service_instance_id"])
            LOGGER.info(common_utils.get_value_from_dict(response.json(), status_path))
            resource_group_name = common_utils.get_value_from_dict(response.json(), resource_group_name_path)
            db_name = common_utils.get_value_from_dict(response.json(), db_name_path)
            return True, resource_group_name, db_name
        
        elif isSuccessfulResponse2 and common_utils.get_value_from_dict(response2.json(), resource_type_path) == 'azurerm_mysql_flexible_server':
            LOGGER.info(order_details["service_instance_id2"])
            LOGGER.info(common_utils.get_value_from_dict(response2.json(), status_path))
            resource_group_name = common_utils.get_value_from_dict(response2.json(), resource_group_name_path)
            db_name = common_utils.get_value_from_dict(response2.json(), db_name_path)
            return True, resource_group_name, db_name
        
        elif isSuccessfulResponse3 and common_utils.get_value_from_dict(response3.json(), resource_type_path) == 'azurerm_mysql_flexible_server':
            LOGGER.info(order_details["service_instance_id3"])
            LOGGER.info(common_utils.get_value_from_dict(response3.json(), status_path))
            resource_group_name = common_utils.get_value_from_dict(response3.json(), resource_group_name_path)
            db_name = common_utils.get_value_from_dict(response3.json(), db_name_path)
            return True, resource_group_name, db_name
        

    return False, resource_group_name, db_name
        

    return False

if __name__ == "__main__":
    LOGGER.info(
        read_petstore_order(
            tenantApiUrl="https://mcmp-redthread-test1aws-uiauto.multicloud-ibm.com/",
            tenantUserId="",
            tenantUserApikey="",
            orderNumber=""
        )
    )