# this script publishes the current state of the master branch to github pages
# only run when there are no changes in the repo.

git checkout master
git pull
git reset --hard HEAD
yarn
yarn build
rm -rf ../build
mv build ..
git checkout gh-pages
git pull
rm -rf *
mv ../build/* .
rm -rf ../build
echo "axelniklasson.se" >> CNAME
git add .
git commit -m "Deployment $(date)"
git push --no-verify
git checkout master