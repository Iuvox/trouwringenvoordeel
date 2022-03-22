FROM node:alpine

WORKDIR /app

ADD ./package.json ./package.json
ADD ./yarn.lock ./yarn.lock

ADD . .

# WORKDIR /app/packages/api

RUN yarn install

