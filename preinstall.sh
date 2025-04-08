#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

# try cloning private git repo over SSH
echo "$GIT_PRIVATE_SSH_KEY" | base64 --decode > ./git_private_key
chmod 400 ./git_private_key
GIT_SSH_COMMAND="ssh -i ./git_private_key" git clone git@github.com:jon-ionic/portals-demo.git
ls -la portals-demo

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi