#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi

curl --verbose https://bitbucket.mygenea.com.au/scm/gol/onlineforms.git
openssl s_client -connect bitbucket.mygenea.com.au:443 -showcerts
