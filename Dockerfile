FROM postgres:latesеt


COPY server/dist app/server
COPY client/bundle app/client
COPY node_modules app/node_modules

RUN npm run start

