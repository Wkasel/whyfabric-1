const { Text, Relationship, Checkbox } = require("@keystonejs/fields");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
// const { withAccessControls } = require('../configs');

module.exports = {
  // access: {
  //   read: true,
  //   update: withAccessControls.userIsAdminOrOwner,
  //   create: withAccessControls.userIsAdminOrOwner,
  //   delete: withAccessControls.userIsAdminOrOwner,
  //   auth: true,
  // },
  fields: {
    name: { type: Text },
    description: { type: Text },
    categories: { type: Relationship, ref: "Category", many: true },
    events: { type: Relationship, ref: "Event", many: true },
    connections: { type: Relationship, ref: "Connection", many: true },
    relatedTheories: { type: Relationship, ref: "Theory", many: true },
    byDate: { type: Checkbox },
    bySequence: { type: Checkbox }
    // voice_note: { type: Relationship, ref: 'VoiceRecording' },
  },
  plugins: [atTracking({}), byTracking({})]
};
