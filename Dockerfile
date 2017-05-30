FROM hope/nodejs:6

WORKDIR /data/app

RUN \
    git clone --depth 1 https://github.com/LifeSourceUA/lifesource.ua.git -b master . && \
    npm install && \
    npm run build

ENTRYPOINT ["npm", "run"]
CMD["start"]

EXPOSE 3000
