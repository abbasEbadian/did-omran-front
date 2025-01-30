FROM node:20.13.1-bookworm-slim

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build && npm run start

