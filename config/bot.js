const Discord = require("discord.js");
const bot = new Discord.Client();
const env = require("./env");

bot.login(env.token);

bot.on("ready", () => {
  console.log(`Bot is ready as ${bot.user.tag}`);
});

bot.on("!version", (msg) => {
  msg.channel.send(env.name + "@" + env.version);
});

bot.onText("!saluda", (msg) => {
  let resp = "Hola " + msg.author.username + "\nTu mensaje fue: " + msg.content;
  msg.channel.send(resp);
});

module.exports = bot;
