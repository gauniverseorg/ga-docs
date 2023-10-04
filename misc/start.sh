#!/bin/bash

cd ~/ga-docs/
sudo kill -SIGTERM $(sudo lsof -t -i :3000)
sudo rm -rf -v ./build/
git pull
sudo npm ci
npm run build
npx docusaurus serve --host 0.0.0.0 > ~/output.log 2>&1 &
