#!/bin/bash

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "Building for iOS"
  pod --version
  xcodebuild -showsdks
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "Building for Android"
fi
