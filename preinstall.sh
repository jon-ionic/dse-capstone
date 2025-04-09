#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

echo "> curl -I https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/"
curl -I https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/

echo "> ping repository.meinestadt.de"
ping repository.meinestadt.de

echo "> traceroute repository.meinestadt.de"
traceroute repository.meinestadt.de

echo "> npm whoami --registry=https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/"
npm whoami --registry=https://repository.meinestadt.de/artifactory/api/npm/meinestadt-npm/


if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi