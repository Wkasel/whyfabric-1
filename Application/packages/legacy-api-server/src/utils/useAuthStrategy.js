const { PassportAuthStrategy } = require("@keystonejs/auth-passport");

const authStrategy = keystone.createAuthStrategy({
  type: PassportAuthStrategy,
  list: "User"
});

export default () => ({
  authStrategy
});
