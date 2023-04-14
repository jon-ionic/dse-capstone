#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "getting jq and gettext..."
  HOMEBREW_NO_AUTO_UPDATE=1 brew install jq gettext

  echo "finding python version"
  python3 --version

  echo "finding ionic cli..."
  which ionic

  echo "finding cordova cli..."
  which cordova

  echo "replacing info.plist value"
  plutil -replace SECRET_STRING -string $OVERRIDE_NODE_VERSION ios/App/App/Info.plist

  echo "done with prebuild tasks"
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "DEBUG from prebuild: $DEBUG"
  free
  apt-get update && apt-get install -y jq gettext
fi
