#!/bin/bash
echo "preinstall script"

echo "getting ulimit..."
ulimit -n

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi
