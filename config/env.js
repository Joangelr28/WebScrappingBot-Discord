if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  version: process.env.npm_package_version,
  name: process.env.npm_package_name,
  token: process.env.BOT_TOKEN, //Required Token
  node_env: process.env.NODE_ENV, //Required "production"
  port: process.env.PORT,
};
