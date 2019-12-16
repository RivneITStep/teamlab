FROM node:latest

MAINTAINER TeamLab


COPY  . /var/www
WORKDIR /var/www

RUN npm install
RUN cd client && npm install && cd ..

ENTRYPOINT [ "npm", "run", "dev" ]