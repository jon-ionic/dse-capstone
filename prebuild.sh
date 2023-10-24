#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "getting jq and gettext..."
  HOMEBREW_NO_AUTO_UPDATE=1 brew install jq gettext curl

  echo "finding python version"
  python3 --version

  echo "finding ionic cli..."
  which ionic

  echo "finding cordova cli..."
  which cordova

  echo "checking swift version..."
  xcrun swift -version
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y jq gettext curl

  echo "finding python version"
  python3 --version

  echo "finding ionic cli..."
  which ionic

  echo "finding cordova cli..."
  which cordova
fi

curl -X POST -d "hello from $CI_PLATFORM!" https://jon-test.requestcatcher.com/test
echo "done with prebuild tasks"