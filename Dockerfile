FROM node:latest

MAINTAINER macnaer


COPY  . /var/www
WORKDIR /var/www

RUN npm install

ENTRYPOINT [ "npm", "run", "server" ]