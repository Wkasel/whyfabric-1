
FROM node:12

WORKDIR /app

RUN chmod 777 -R /app

ENV NODE_ENV=production

RUN yarn global add lerna

# Application Packages
COPY package.json lerna.json yarn.lock /app/
COPY packages/webapp/package.json /app/packages/webapp/package.json
COPY packages/services/package.json /app/packages/services/package.json

RUN yarn install --production=true

ADD packages/webapp /app/packages/webap/
ADD packages/services /app/packages/services/

RUN yarn run bootstrap

COPY ./scripts/entrypoint.sh /app/

# RUN yarn up
ENTRYPOINT [ "./entrtypoint.sh" ]
