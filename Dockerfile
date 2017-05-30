FROM hope/nodejs:6

WORKDIR /data/app

RUN \
    apk add --no-cache --virtual=build-dependencies git && \

    git clone --depth 1 https://github.com/LifeSourceUA/lifesource.ua.git -b master . && \
    npm install && \
    npm run build

    apk del build-dependencies

ENTRYPOINT ["npm", "run"]
CMD ["start"]

EXPOSE 3000
