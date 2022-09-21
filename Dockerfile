ARG NODE_TAG=16-alpine3.16
ARG PORT=3000

FROM node:$NODE_TAG

WORKDIR /home/node/app

COPY . .

RUN npm i

RUN npm run build

FROM node:$NODE_TAG

RUN apk add --no-cache tini

WORKDIR /home/node/app

COPY --from=0 /home/node/app/dist ./dist
COPY --from=0 /home/node/app/package.json ./
COPY --from=0 /home/node/app/package-lock.json ./

RUN npm i --omit=dev

USER node

EXPOSE $PORT

CMD [ "/sbin/tini", "--", "node", "dist/index.js" ]
