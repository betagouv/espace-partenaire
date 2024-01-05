#

FROM node:lts-buster-slim as base

ENV TZ Europe/Paris
RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
  npm install -g npm@latest

WORKDIR /home/node/app

COPY ./package.json ./
COPY ./back/package.json ./back/
COPY ./front/package.json ./front/
COPY ./front/public/ ./front/public/

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
  npm install --omit=dev

#

FROM base AS build

RUN --mount=type=cache,target=/root/.npm,sharing=locked \
  npm install

COPY ./back/ ./back/
COPY ./front/ ./front/

ENV NODE_ENV=production

RUN npm run build

#

FROM base

COPY --from=build /home/node/app/back/dist/ ./back/dist/
COPY --from=build /home/node/app/front/dist/ ./front/dist/

#

USER node
EXPOSE 3000/tcp
ENTRYPOINT [ "npm", "start" ]
