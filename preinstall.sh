#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

echo "> curl --max-time 10 -I https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/"
curl -I https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/

echo "> npm whoami --registry=https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/"
npm whoami --registry=https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/


if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y traceroute iputils-ping dnsutils
fi

echo "> dig +short repository.meinestadt.de"
dig +short repository.meinestadt.de

echo "> ping -c 4 repository.meinestadt.de"
ping repository.meinestadt.de

echo "> traceroute repository.meinestadt.de"
traceroute repository.meinestadt.de