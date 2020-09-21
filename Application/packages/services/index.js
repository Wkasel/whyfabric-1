/* eslint-disable import/no-unresolved */
import Express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server";
// import { resolvePlugin } from "@babel/core";

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { routes, graphServiceSchema as graphSchema } from "~graph";

const Config = {
  name: "Fabric MicroServices",
  port: process.env.PORT || 5000,
  timeout: 30000,
};
const Messages = {
  connect: (svc) => `
            [${Config.name}] (online)
            =========================
                using: ${svc}
            =========================
                - ✅ Fabric Graph Rendering
                - ✅ Fabric Graph Layout
        `,
  error: `
  ***************************
  ❌ [${Config.name}] (error)
  `,
  timeout: `[{$Config.name}] - connection timeout (TTL - ${Config.timeout})`,
};

const onError = (error) => {
  console.error(`[${Config.name}] - Error - ${JSON.stringify(error)}`);
  process.exit(1);
};
const serverEvents = (server, type) => {
  server.on("connect", () => console.info(Messages.connnect(type)));
  server.on("timeout", () => console.info(Messages.timeout));
  server.on("error", onError);
};

const promiseExpress = async () =>
  new Promise((resolve, reject) => {
    try {
      const app = Express();

      // Config Express - body parsing
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json({ inflate: true }));

      // Routes
      routes.get.map((route) => app.get(route.path, route.func));
      routes.post.map((route) => app.post(route.path, route.func));

      // events;
      serverEvents(app, "Express");

      resolve(app);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });

const promiseApollo = async () => {
  const app = new ApolloServer(graphSchema);
  serverEvents(app);
  return app;
};

const promiseRun = async (server) => {
  return server.listen({ port: Config.port });
};

const run = async (endpoint) => {
  try {
    // let server;
    // if (endpoint === "graphql") {
    //   server = await promiseApollo();
    // } else {
    //   server = await promiseExpress();
    // }
    const server = await promiseExpress();
    await promiseRun(server)
      .then((response) => {
        console.log(
          `🚀 [${endpoint}] Server ready at http://localhost:${Config.port}`
        );
        // serverEvents(response, "connect");
      })
      .catch((e) => console.log(e));
  } catch (e) {
    onError(e);
  }
};

// TODO: Remove Graphql Implementation in Graph MicroService
run("express");
