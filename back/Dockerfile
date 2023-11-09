FROM node:current-buster-slim

# cf https://stackoverflow.com/questions/65076483/node-nestjs-watch-always-break
RUN apt-get update; \
    apt-get install --no-install-recommends --no-install-suggests -q -y procps

# Create app directory 
RUN mkdir -p /srv/espace-partenaire/back

WORKDIR /srv/espace-partenaire/back

# Install global dependencies
COPY package.json /srv/espace-partenaire/back
RUN npm install -g npm

# Bundle app source
COPY . /srv/espace-partenaire/back

ENTRYPOINT [ "/bin/sh", "entrypoint.sh" ]

CMD ["npm", "run", "start:dev"]
