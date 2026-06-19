FROM node:24-alpine

COPY package-lock.json package-lock.json
COPY package.json package.json
COPY index.js index.js

RUN npm install

EXPOSE 8000

CMD [ "node", "index" ]