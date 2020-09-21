# Specify Node version
FROM node:lts-slim

RUN apt update && apt install -y python build-essential

WORKDIR /tmp/build
ENV NODE_ENV=production

# Copy only required files for fetching dependencies
COPY package.json /tmp/build/
RUN yarn --prod

RUN mv /tmp/build/node_modules /tmp/node_modules

# Copy the whole app in
COPY . /tmp/build

# Replace node_modules
RUN rm -rf /tmp/build/node_modules /tmp/build/.next && mv /tmp/node_modules /tmp/build/node_modules

# Build the app
RUN yarn build

WORKDIR /usr/src/app

# Copy only app runtime (required files for app to run)
RUN cp -a /tmp/build/node_modules /tmp/build/.next /tmp/build/package.json /usr/src/app/ \
    && rm -rf /tmp/build

# Set environment variables
ENV PORT=80

# Start app
CMD yarn start

EXPOSE 80