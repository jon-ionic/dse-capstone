#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  HOMEBREW_NO_AUTO_UPDATE=1 brew install jq gettext
  xcrun simctl list
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  free
  unset DEBUG
  apt-get update && apt-get install -y jq gettext
fi
