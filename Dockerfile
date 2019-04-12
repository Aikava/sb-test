FROM node:11

COPY server/dist /app
COPY client/dist /app/static
COPY package.json /app/package.json
COPY node_modules /app/node_modules

WORKDIR /app

ENV NODE_CONFIG_DIR=/app/src/config
ENV NODE_PATH=/app

RUN npm run start

