import time
import datetime
import requests
import os
from common_utils import *
import uuid
import logging
import random

from datetime import datetime, timezone

logging.basicConfig(level=logging.INFO)
LOGGER = logging.getLogger("Build")


class Builder:
    def __init__(self,  tecnicalServiceName, buildId=uuid.uuid4().__str__(), buildEngine="Jenkins", commitNumber="606b16c15ea6ade03fe70dc9a88c306a54be7a14", buildUrl="http://13.82.103.214:8080/view/RedThread/job/redthread-petstore-deployment-template/71/console", hostname="13.82.103.214:8080", pullRequestNumber="23", repoUrl="https://github.com/mcmpdemoeng/jpetstore-kubernetes.git", details="" ):

        self.branch = f'release-{time.strftime("%Y")}-{time.strftime("%m")}-{time.strftime("%d")}'
        self.build_engine = buildEngine
        self.build_id = buildId
        self.build_status = None
        self.built_at =  None
        self.commit = os.getenv("COMMIT_NUMBER", commitNumber)
        self.details = details
        self.duration = -1
        self.durationInNano = -1
        self.endpoint_hostname = "https://dev.azure.com/jamesxavier2/ModernOpsDemoEng/_build?definitionId=8"
        self.endpoint_technical_service_id = hostname.replace(":","_")
        self.event_type = "push"
        self.pull_request_number = pullRequestNumber
        self.repo_url = repoUrl
        self.technical_service_name = tecnicalServiceName
        self.technical_service_override = True
        self.href = "https://dev.azure.com/jamesxavier2/ModernOpsDemoEng/_build?definitionId=8"
        self.provider_href = "https://dev.azure.com/jamesxavier2/ModernOpsDemoEng/_build?definitionId=8"


    def post_data_into_tenant(self,  buildToken: str, tenantUrl:str ):
        ##Make sure you sanitize the tenant url as the fist step

        tenantUrl = sanitazeTenantUrl(tenantUrl)
        headers = {
            "Authorization": f"TOKEN {buildToken}",
            "Content-Type": "application/json",
            "accept": "application/json"
        }
        params = {
            "technicalServiceOverride": True,
        }
        technicalServiceName = "PetstorePattern"
        applicationName = "petstore"
        toolName = "byo_ado"
        endpointUrl = f"{tenantUrl}dash/api/build/v3/application/{applicationName}/technical-services/{technicalServiceName}/tool/{toolName}/builds"
        branch=f'release-{time.strftime("%Y.%m.%d")}'
        params = {
            "technicalServiceOverride": 'true'
        }
        min_ns = 5 * 60 * 1_000_000_000
        max_ns = 10 * 60 * 1_000_000_000
        payload = {
            'branch': branch, 
            'build_engine': 'Jenkins', 
            'build_id': str(uuid.uuid4()), 
            'build_status': 'passed', 
            'built_at': datetime.now(timezone.utc).isoformat(timespec='microseconds').replace('+00:00', 'Z'), 
            'commit': '606b16c15ea6ade03fe70dc9a88c306a54be7a14', 
            'details': 'Sample data build', 
            'duration': random.randint(min_ns, max_ns), ## Build time has to be in nano seconds!! ## 
            'durationInNano': random.randint(min_ns, max_ns),
            'endpoint_hostname': '13.82.103.214:8080', 
            'endpoint_technical_service_id': technicalServiceName, 
            'event_type': 'push', 
            'pull_request_number': '23', 
            'repo_url': 'https://github.com/bridge-demo/jpetstore-kubernetes', 
            'technical_service_name': technicalServiceName, 
            'technical_service_override': True, 
            'href': "https://dev.azure.com/jamesxavier2/ModernOpsDemoEng/_build?definitionId=8",
            'provider_href': "https://dev.azure.com/jamesxavier2/ModernOpsDemoEng/_build?definitionId=8"
        }

        response, success, errorMessage = make_web_request(url=endpointUrl, payload=payload, headers=headers, requestMethod=requests.post, params=params)
        LOGGER.info(
            f"Build publishment status code : {response.status_code}"
        )
        if self.build_status == "failed" and success:
            LOGGER.error(f"""
            Publlished build data succesfully:
            {self.__dict__}
            Exiting with status code 1 due to build failure when it ran
            """)
            exit(1)
        elif self.build_status == "failed" and not success:
            LOGGER.error(f"""
            Fail to publish data:
           {self.__dict__}
            Exiting with status code 1 due to build failure when it ran and fail in data publishment
            """)
            exit(1)
        return success, errorMessage



    def docker_logout():
        """
        This function will return 'None' if completed successfully, otherwise an error string will be return
        """
        os.system( "sudo docker logout" )


    def create_docker_image(self,  imageName="defaultName", dockerFileDirectory=".",   ):

        self.built_at = datetime.utcnow().isoformat("T") + "Z"
        buildCommand = f"sudo docker build -t {imageName} {dockerFileDirectory}"
        LOGGER.info(f"Docker Build Command {buildCommand}")
        self.details = f"Image -> {imageName}"
        try:
            startTime = datetime.now()
            returnCode = os.system( buildCommand )
            LOGGER.info(f"Status Code Image build {returnCode}")
            successFulBuild = returnCode == 0
            if not successFulBuild:
                self.build_status = "failed"
                endTime = datetime.now()
                self.duration = (endTime - startTime).microseconds * 10000
                self.durationInNano = self.duration
                return {
                "buildDuration": self.duration,
                "buildStatus" : self.build_status
            }

            endTime = datetime.now()
            self.build_status = "passed"
            self.duration = (endTime - startTime).microseconds * 1000
            self.durationInNano = self.duration
            return {
                "buildDuration": self.duration,
                "buildStatus" : self.build_status
            }

        except BaseException as error:
            endTime = datetime.now()
            LOGGER.error(
                f"Fail to buid image '{imageName}' in path '{dockerFileDirectory}'\nError: {error}"
            )
            self.build_status = "failed"
            self.duration = (endTime - startTime).microseconds * 10000
            self.durationInNano = self.duration
            return {
                "buildDuration": endTime - startTime,
                "buildStatus" : self.build_status
            }



    def upload_docker_image(self,  fullImangeName ) -> str:
        """
        This function will return 'None' if completed successfully, otherwise an error string will be return
        """

        pushCommand = f"sudo docker push {fullImangeName}"

        try:
            returnCode = os.system(pushCommand)
            successfullyExecuted =  returnCode == 0
            if successfullyExecuted:

                return None
            else:
                return f"Fail to push\nCommand: {pushCommand}"

        except BaseException as error:
            return error


    def login_to_docker(self, dockerUser, dockerPassoword):
        """
        This function will return 'None' if completed successfully, otherwise an error string will be return
        """

        loginCommand = f"sudo docker login -u {dockerUser} -p {dockerPassoword}"

        # loginCommand = loginCommand.split(" ")

        try:
            returnCode = os.system(loginCommand)
            successfullyExecuted = returnCode == 0
            if not successfullyExecuted:
                raise Exception(f"Fail to login to docker\nCommand: {loginCommand}")
            return None
        except BaseException as error:

            LOGGER.info(
                f"Fail to login to docker repository \nError: {error}"
            )
            return error



if __name__ == "__main__":
    buildtest = Builder( buildId="thisisisanid", tecnicalServiceName="test3" )
    buildtest.create_docker_image(
        imageName="test3:latest",
    )
    LOGGER.info(
        buildtest.__dict__
    )
    # LOGGER.info(
    #     buildtest.post_data_into_tenant(tenantUrl="https://mcmp-explore-jamesxavier2-mar16-220316202344.multicloud-ibm.com/", buildToken="")
    # )

