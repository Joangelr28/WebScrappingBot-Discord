const resp = require("../lang/es");

let saved = [];
let new_entries = [];
let i = 0;

module.exports = {
  async create(message) {
    message.channel.send("El contador esta por: " + i);
    i++;
  },
};
