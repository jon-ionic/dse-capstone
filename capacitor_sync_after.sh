#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "replacing info.plist value"
  plutil -replace SECRET_STRING -string $OVERRIDE_NODE_VERSION ios/App/App/Info.plist

  cat ios/App/App/Info.plist
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "na"
fi
