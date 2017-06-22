# Dev image
FROM hope/nodejs:6

WORKDIR /data/dev

RUN \
    # Prepare build deps
    apk add --no-cache --virtual=build-dependencies git ruby ruby-json && \
    gem install scss_lint -v 0.54.0 --no-ri && \

    git clone --depth 1 https://github.com/LifeSourceUA/lifesource.ua.git -b master . && \

    # Test build
    npm install && \
    npm run lint

# Production image
FROM hope/nodejs:6

ENV \
    NODE_ENV=production

WORKDIR /data/app

RUN \
    apk add --no-cache --virtual=build-dependencies git && \

    git clone --depth 1 https://github.com/LifeSourceUA/lifesource.ua.git -b master . && \
    npm install && \
    npm run build && \

    apk del build-dependencies

ENTRYPOINT ["npm", "run"]
CMD ["start"]

EXPOSE 3000
