!#/bin/bash

git checkout gh-pages
yarn build
mv build/* .
git add .
git commit -m "Deployment $(date)"
git push
git checkout master
