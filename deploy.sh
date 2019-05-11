#!/bin/bash

git checkout gh-pages
yarn build
mv build/* .
git add .
git commit -m "Deploy $(date)"
git push
git checkout master
