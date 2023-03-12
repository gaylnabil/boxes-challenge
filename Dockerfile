FROM node:18.13.0-alpine as development

ENV NODE_ENV development

WORKDIR ./boxes-challenge

COPY ./ ./

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

CMD [ "npm", "start" ]

