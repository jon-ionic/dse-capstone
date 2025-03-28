if [ \"$CI_PLATFORM\" != \"web\" ]; then 
    trapeze_output="$(npx trapeze run ci.yml -y --$CI_PLATFORM; npx trapeze run ci.yml -y --$CI_PLATFORM)"
    echo "===================="
    echo "== Trapeze output =="
    echo "===================="
    echo "$trapeze_output" | grep updated | awk '{print "=== " $2 " ==="; system("cat \"" $2 "\""); print ""}'
fi

npm run build