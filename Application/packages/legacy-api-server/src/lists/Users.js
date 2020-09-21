const {
  Text,
  Checkbox,
  Password,
  Select,
  File,
  Relationship
} = require("@keystonejs/fields");
const { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
const { atTracking } = require("@keystonejs/list-plugins");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
// TODO - move to s3
// const { withAccessControls } = require('../configs');

// access: {
//   read: withAccessControls.userIsAdminOrOwner,
//   update: withAccessControls.userIsAdminOrOwner,
//   create: true,
//   delete: withAccessControls.userIsAdmin,
//   auth: true,
// },
// knowledge: { type: Relationship, ref: 'Knows', many: true },
// awards: { type: Relationship, ref: 'Award', many: true },
// works: { type: Relationship, ref: 'Works', many: true },
module.exports = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
      access: ({ existingItem, authentication }) =>
        authentication.item.isAdmin ||
        existingItem.id === authentication.item.id
    },
    biography: { type: Text },
    organizations: { type: Relationship, ref: "Organization", many: true },
    referredBy: { type: Relationship, ref: "User" },
    isAdmin: {
      type: Checkbox,
      defaultValue: false,
      access: ({ existingItem, authentication }) =>
        authentication.item.isAdmin ||
        existingItem.id === authentication.item.id
    },
    isSME: { type: Checkbox, defaultValue: false },
    requestedSME: { type: Checkbox, defaultValue: false },
    activeState: {
      type: Select,
      options: ["active", "deactivated"],
      defaultValue: "active"
    },
    city: { type: Text },
    country: { type: Text },
    password: {
      type: Password,
      access: {
        read: ({ authentication }) => authentication.item.isAdmin,
        update: ({ existingItem, authentication }) =>
          authentication.item.isAdmin ||
          existingItem.id === authentication.item.id
      }
    },
    photo: {
      type: File,
      adapter: LocalFileAdapter
    },
    lastLogin: {
      type: DateTimeUtc
    },
    googleId: { type: Text }
  },
  plugins: [atTracking({})]
};
