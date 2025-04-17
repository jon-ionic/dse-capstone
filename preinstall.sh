#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

if [[ "$CI_PLATFORM" == "ios" ]]; then
  gem uninstall cocoapods
  gem install cocoapods -v 1.16.2
fi