#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  HOMEBREW_NO_AUTO_UPDATE=1 brew install jq gettext
  which ionic
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "DEBUG from prebuild: $DEBUG"
  free
  apt-get update && apt-get install -y jq gettext
fi
