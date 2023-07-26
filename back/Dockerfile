# ---- Basic configuration ----
FROM node:current-buster-slim AS base
RUN npm install -g npm@9.8.0
RUN mkdir /srv/espace-partenaire/
RUN mkdir /srv/espace-partenaire/back/
WORKDIR /srv/espace-partenaire/back
COPY package*.json ./

# ---- Final ----
FROM base as final
WORKDIR /srv/espace-partenaire/back
RUN if [ "$ENV"="dev" ]; npm install --dev; then npm install; fi
COPY . .
