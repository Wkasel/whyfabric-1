const { Keystone } = require("@keystonejs/keystone");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const { registerAppLists } = require("../lists");

const initialiseData = require("./initial-data");

const PROJECT_NAME = "@whyfabric/api-server";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData
});

module.exports = () => ({
  keystone,
  lists: registerAppLists
});
