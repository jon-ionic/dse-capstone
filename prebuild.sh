#!/bin/bash

echo "prebuild"

if [[ "$CI_PLATFORM" == "ios" ]]; then
  HOMEBREW_NO_AUTO_UPDATE=1 brew install jq gettext
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y jq gettext
fi
