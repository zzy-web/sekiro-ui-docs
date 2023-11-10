#!/bin/bash

set -e

if [ -z "$INPUT_ARGS" ]; then
  echo 'Required Args parameter'
  exit 1
fi

# ...省略部分代码

coscmd config -a $INPUT_SECRET_ID -s $INPUT_SECRET_KEY -b $INPUT_BUCKET -r $INPUT_REGION -m $THREAD

IFS="&&"
arrARGS=($INPUT_ARGS)

for each in ${arrARGS[@]}
do
  unset IFS
  each=$(echo ${each} | xargs)
  if [ -n "$each" ]; then
  echo "Running command: coscmd ${each}"
  coscmd $each
  fi
done