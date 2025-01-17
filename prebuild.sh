#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "Building for iOS"
  ls -la /opt/homebrew/Cellar/fastlane/2.220.0/libexec/gems/
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "Building for Android"
fi
