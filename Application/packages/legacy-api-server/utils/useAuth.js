const {
  GoogleAuthStrategy,
  FacebookStrategy,
  LocalStrategy
} = require("@keystonejs/auth-passport");
const passport = require("passport");

const useAuth = ks =>
  ks.createAuthStrategy({
    type: GoogleAuthStrategy,
    list: "User",
    config: {
      idField: "googleId",
      appId:
        "118652641714-q7q7v19peltsp6liut0mmtdqs9iputf3.apps.googleusercontent.com",
      appSecret: "y8yqFPZjf3Dekkp5HMH8Vbh-",
      loginPath: "/auth/google",
      callbackPath: "/auth/google/callback",
      loginPathMiddleware: (req, res, next) => {
        // An express middleware executed before the Passport social signin flow
        // begins. Useful for setting cookies, etc.
        // Don't forget to call `next()`!
        next();
      },

      callbackPathMiddleware: (req, res, next) => {
        // An express middleware executed before the callback route is run. Useful
        // for logging, etc.
        // Don't forget to call `next()`!
        next();
      },

      // Called when there's no existing user for the given googleId
      // Default: resolveCreateData: () => ({})
      resolveCreateData: (
        { createData, actions: { pauseAuthentication } },
        req,
        res
      ) => {
        // If we don't have the right data to continue with a creation
      },

      // Once a user is found/created and successfully matched to the
      // googleId, they are authenticated, and the token is returned here.
      // NOTE: By default KeystoneJS sets a `keystone.sid` which authenticates the
      // user for the API domain. If you want to authenticate via another domain,
      // you must pass the `token` as a Bearer Token to GraphQL requests.
      onAuthenticated: ({ token, item, isNewItem }, req, res) => {
        console.log(token);
        res.redirect(`http://localhost:3000/api/auth/google/${token}`);
      },

      // If there was an error during any of the authentication flow, this
      // callback is executed
      onError: (error, req, res) => {
        console.error(error);
        res.redirect("/?error=Uh-oh");
      }
    }
  });

const adminAuth = ks =>
  ks.createAuthStrategy({
    type: LocalStrategy,
    list: "User"
  });

module.exports = { useAuth, adminAuth };
