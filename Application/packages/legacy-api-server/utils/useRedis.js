require("dotenv").config("../.env");
// Redis Session for Prod
const redis = require("redis");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const chalk = require("chalk");

const redisClient = redis.createClient({
  host: "redis-11625.c84.us-east-1-2.ec2.cloud.redislabs.com", // process.env.REDIS_ENDPOINT removed for dev
  port: 11625, // process.env.REDIS_PORT
  password: "H9VYNCBIX7DA525IqKRzyPfIPFITWOf2" // process.env.REDIS_PASSWORD
});

redisClient.on("error", e => {
  console.error(`
        ${chalk.red(`[WF-Api-Server] - [REDIS] Error ${e}`)})}
    `);
});

const useRedisWithRetry = app => {
  // https://www.npmjs.com/package/connect-redis
  const sessionMiddleware = session({
    store: new RedisStore({
      host: process.env.REDIS_ENDPOINT,
      port: process.env.REDIS_PORT,
      client: redisClient,
      ttl: 86400
    }),
    name: "_whyfabric",
    cookie: { secure: false },
    secret: "whyfabric-knows-all-123sadasdaE",
    resave: false
  });

  // https://github.com/expressjs/session/issues/99#issuecomment-63853989
  app.use(function(req, res, next) {
    let tries = 3;

    const lookupSession = error => {
      if (error) next(error);
      tries -= 1;
      if (req.session !== undefined) return next();
      if (tries < 0) return next(new Error("oh no"));
      return sessionMiddleware(req, res, lookupSession);
    };

    lookupSession();
  });
};

const useRedis = () =>
  new RedisStore({
    client: redisClient,
    ttl: 86400
  });

module.exports = { useRedis, useRedisWithRetry };
