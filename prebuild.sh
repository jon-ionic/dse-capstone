#!/bin/bash

echo "prebuild"

if [[ "$CI_PLATFORM" == "ios" ]]; then
  brew install jq gettext
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get install jq gettext
fi
