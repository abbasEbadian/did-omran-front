FROM node:22-alipine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json /app

RUN pnpm install

COPY . /app

RUN pnpm build && pnpm start

