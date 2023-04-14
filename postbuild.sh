if [[ "$CI_PLATFORM" == "ios" ]]; then
  cat ios/App/App/Info.plist
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "na"
fi