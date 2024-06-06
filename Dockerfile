FROM node:20.14-alpine

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn cache clean \
   rm -rf node_modules \
   yarn install --frozen-lockfile \
   yarn add prisma -D \
   yarn prisma generate

COPY . .

EXPOSE 3002

CMD ["yarn", "start:swc"]
