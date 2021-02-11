// keys.js - figure out whtat set of credentials to returns
if (process.env.NODE_ENV === "production") {
  //we're in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  //we're in developtment -return the dev keys !!!
  module.exports = require("./dev");
}
