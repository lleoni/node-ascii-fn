FROM mpneuried/nodejs-alpine-buildtools-gm

WORKDIR /app
ADD package.json .
ADD index.js .

RUN npm i

CMD ["node","/app/index.js"]
