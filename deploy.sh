#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git add -A
message='deploy'$(date '+%s')
git commit -m $message

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:brookssime/brookssime.github.io.git master



cd -
