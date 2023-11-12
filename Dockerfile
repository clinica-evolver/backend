FROM node:18.5-bullseye-slim as builder
WORKDIR /usr/src/app
COPY . .

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

FROM builder as dev

ENTRYPOINT ["./entrypoint.sh"]

FROM builder as homolog

ENTRYPOINT ["./entrypoint.sh"]
