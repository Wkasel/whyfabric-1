require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";

const express = require("express");
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const chalk = require("chalk");
const { useAuth, adminAuth } = require("./utils/useAuth");
const { useRedis } = require("./utils/useRedis");
const { registerAppLists } = require("./src/lists");

const initialData = require("./src/utils/initial-data");

const PROJECT_NAME = "@whyfabric/api-server";
const cookieSecret = "UIyc7tgrtgvJ45";

const keystone = new Keystone({
  name: PROJECT_NAME,
  secureCookies: false,
  adapter: new Adapter({
    mongoUri: process.env.MONGO_URI
  }),
  cookieSecret,
  // onConnect: initialData,

  sessionStore: useRedis(),
  configureExpress: () => {}
});

registerAppLists(keystone);
useAuth(keystone);

const apps = [
  new GraphQLApp({
    // apiPath: "/admin/api",
    // graphiqlPath: "/graphiql"
  }),
  new AdminUIApp({
    adminPath: "/admin",
    path: "/admin",
    enableDefaultRoute: true,
    isAccessAllowed: ({ authentication: { item: user, listKey: list } }) =>
      !!user && !!user.isAdmin
  })
];

module.exports = {
  keystone,
  apps
};
