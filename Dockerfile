# Dev image
FROM hope/nodejs:6

WORKDIR /data/app

RUN \
    # Prepare build deps
    apk add --no-cache --virtual=build-dependencies git ruby && \
    gem install scss_lint -v 0.48.0 --no-ri && \

    #
    git clone --depth 1 https://github.com/LifeSourceUA/lifesource.ua.git -b master . && \
    npm install && \

    # Test build
    npm run lint && \
    npm run build

# Production image
FROM hope/nodejs:6

ENV \
    NODE_ENV=production

WORKDIR /data/app
COPY --from=0 /data/app .

ENTRYPOINT ["npm", "run"]
CMD ["start"]

EXPOSE 3000
