#!/bin/bash

COMMANDS=( "which ionic" )
for c in "${COMMANDS[@]}"
do
  echo "$ $c"
  $c
  echo ""
done