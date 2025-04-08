#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

# try cloning private git repo over SSH
echo $GIT_PRIVATE_SSH_KEY > ./git_private_key
GIT_SSH_COMMAND="ssh -i ./git_private_key" git clone https://github.com/jon-ionic/portals-demo
ls -la portals-demo

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi