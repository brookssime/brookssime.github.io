#!/usr/bin/env sh

# abort on errors
set -e

git checkout development

#install
npm install

# build
npm run build

# navigate into the build output directory
cd dist

git add -A

git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:brookssime/brookssime.github.io.git development


git checkout master 

git checkout development dist/static dist/index.html

git commit -m 'deploy'

git push -f  git@github.com:brookssime/brookssime.github.io.git master

cd -
