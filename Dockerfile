FROM node:16.13.1-alpine

WORKDIR /app

ADD ./ /app

RUN npm install --unsafe-perm --force -g yarn && \
  chmod +x /usr/local/bin/yarn

RUN ls -lsa

ENTRYPOINT yarn && \
  yarn start