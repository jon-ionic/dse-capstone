#!/bin/bash
echo "preinstall script"

echo "getting ulimit..."
ulimit -n

echo "getting node limit..."
npm install posix; node -p 'require("posix").getrlimit("nofile")'

echo "getting ~/.ssh/config..."
cat ~/.ssh/config

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi
