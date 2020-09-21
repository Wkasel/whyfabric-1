const { Text, Select } = require("@keystonejs/fields");

const { atTracking, byTracking } = require("@keystonejs/list-plugins");

module.exports = {
  fields: {
    name: { type: Text },
    description: { type: Text },
    activeState: {
      type: Select,
      options: ["active", "deactivated"],
      defaultValue: "active"
    }
  },
  plugins: [atTracking({}), byTracking()]
};
