// import "module-alias/register";
// require("module-alias/register");
import express from 'express';
import next from 'next';

// import { config } from "@config/config.server";

// import nextI18NextMiddleware from "next-i18next/middleware";
// import nextI18n from "../src/i18n";

// import { routing } from "./routing";
// import { sitemapSWAndRobots } from "./sitemapSWAndRobots";

// const dev = config.common.DEV;
const dev = true;

const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const router = express.Router({
  caseSensitive: true,
  strict: true,
});

server.use(router);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  await app.prepare();

  server.set('strict routing', true);
  server.set('case sensitive routing', true);

  // Get all the static & next specific files
  server.get(/^\/(?!_next|static).*$/, (req, res) => handle(req, res));

  /* Init Sitemap, Service Worker & robots.txt support */
  // sitemapSWAndRobots({ router, app });

  /* Declare routes */
  // await routing(dev, router);

  // server.use(nextI18NextMiddleware(nextI18n));
  router.get('*', (req, res) => handle(req, res));
  /* Start the server! */
  server.listen(5000, (err) => {
    if (err) {
      return err;
    }
  });
  // tslint:disable-next-line:no-console
  console.info(
    `> Frontend app listening on http://localhost:5000 in dev mode)`
  );
})();

export default app;
