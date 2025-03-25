#!/bin/bash
echo !!!!!!!!
echo ${PAYLOAD} 
echo ${ORDER_NUMBER}
echo !!!!!!!!
wget -q https://github.com/cli/cli/releases/download/v2.5.2/gh_2.5.2_linux_386.tar.gz

tar -xf gh_2.5.2_linux_386.tar.gz

echo ${GITHUB_ACCESS_TOKEN} > github_token

./gh_2.5.2_linux_386/bin/gh auth login -h GitHub.com --with-token < github_token

if [[ -d "jpetstore-kubernetes" ]]
then
	cd jpetstore-kubernetes
    git add .
    git commit -m "just need to commit before the pull"
    git pull
    cd ..
else
	git clone --single-branch -b kphc-1 "${GITHUB_REPO_URL}"
fi

cd jpetstore-kubernetes

chmod +x ./pipeline-jenkins/pipeline-jenkins.sh

cd pipeline-python


rm -r ../../gh_*
echo sudo docker login -u mcmpdemo -p mcmprocks123
python3 pipeline-jenkins.py --github-token $GITHUB_ACCESS_TOKEN --docker-user $DOCKER_USER --docker-password $DOCKER_PASSWORD --tenant-url $TENANT_URL --user-id $USER_ID --user-api-key $USER_API_KEY --build-token $BUILD_TOKEN --test-token $TEST_TOKEN --deploy-token $DEPLOY_TOKEN --secure-token $SECURE_TOKEN --order-number $ORDER_NUMBER --fulfillment-id $FULFILLMENT_ID
