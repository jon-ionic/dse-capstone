VERSION_NUMBER=$(git name-rev --name-only HEAD | grep -Eo "[0-9.]+")
APP_VERSION=$VERSION_NUMBER

echo "APP_VERSION..."
echo $APP_VERSION

if [ \"$CI_PLATFORM\" != \"web\" ]; then npx trapeze run ci.yml -y --$CI_PLATFORM; fi && npm run build