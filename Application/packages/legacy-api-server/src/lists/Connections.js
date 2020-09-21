const { Text, Relationship } = require("@keystonejs/fields");

// define new field
module.exports = {
  fields: {
    theory: { type: Relationship, ref: "Theory" },
    start: { type: Relationship, ref: "Event" },
    end: { type: Relationship, ref: "Event" },
    justification: { type: Text }
  }
};
