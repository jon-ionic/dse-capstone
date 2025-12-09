#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

echo "Ruby version: $(ruby -v)"
echo "Gem version: $(gem -v)"
