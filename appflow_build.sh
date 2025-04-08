if [ \"$CI_PLATFORM\" != \"web\" ]; then 
    npx trapeze run ci.yml -y --$CI_PLATFORM; npx trapeze run ci.yml -y --$CI_PLATFORM
fi

npm run build