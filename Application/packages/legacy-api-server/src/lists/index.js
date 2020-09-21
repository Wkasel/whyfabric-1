const CategoriesSchema = require("./Categories.js");
const ConnectionsSchema = require("./Connections.js");
const EventsSchema = require("./Events.js");
const OrganizationsSchema = require("./Organizations.js");
const TheoriesSchema = require("./Theories.js");
const UsersSchema = require("./Users.js");

const schemas = [
  {
    model: "Category",
    schema: CategoriesSchema
  },
  {
    model: "Connection",
    schema: ConnectionsSchema
  },
  {
    model: "Event",
    schema: EventsSchema
  },
  {
    model: "Organization",
    schema: OrganizationsSchema
  },
  {
    model: "Theory",
    schema: TheoriesSchema
  },
  {
    model: "User",
    schema: UsersSchema
  }
];

const registerAppLists = ks =>
  schemas.map(schema => ks.createList(schema.model, schema.schema));

module.exports = { registerAppLists };

// to create
// awards
// categories -> options: ['Current Affairs', 'History', 'Economics', 'Science'],
// works
// knows
// VoiceRecording
// RelatedTheories
// GlobalEvent
