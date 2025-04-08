#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi