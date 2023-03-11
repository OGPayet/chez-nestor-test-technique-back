FROM node:16-alpine

WORKDIR /app

RUN npm i -g pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma

RUN pnpm install