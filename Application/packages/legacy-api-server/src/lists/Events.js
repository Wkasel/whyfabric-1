const {
  Text,
  Checkbox,
  DateTime,
  Relationship,
  Integer
} = require("@keystonejs/fields");

const { atTracking, byTracking } = require("@keystonejs/list-plugins");

module.exports = {
  fields: {
    name: { type: Text },
    description: { type: Text },
    date: { type: DateTime },
    sequence: { type: Integer },
    syncedEvents: { type: Relationship, ref: "Event", many: true },
    isAproximate: { type: Checkbox },
    isApex: { type: Checkbox },
    isActive: { type: Checkbox },
    isPassive: { type: Checkbox }
  },
  plugins: [atTracking({}), byTracking()]
};
