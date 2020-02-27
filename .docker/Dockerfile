FROM node:12.13.1-slim

RUN apt-get update && apt-get upgrade

COPY . /app
WORKDIR /app

RUN npm install -g cross-env rimraf
RUN npm install
