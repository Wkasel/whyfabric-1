const { Text, Url } = require("@keystonejs/fields");

const { atTracking, byTracking } = require("@keystonejs/list-plugins");

module.exports = {
  fields: {
    name: { type: Text },
    website: {
      type: Url
    },
    about: { type: Text }
    // awards: { type: Relationship, ref: 'RelatedTheories', many: true },
  },
  plugins: [atTracking({}), byTracking()]
};
