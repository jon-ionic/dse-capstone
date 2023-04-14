if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "na"
elif [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  echo "na"
fi