const bot = require("./bot");
const scrapping = require("./middleware/scrapping");

let scrap = null;

bot.on("message", (mensaje) => {
  let msg = mensaje.content;

  if (msg === "!start" && scrap == null) {
    mensaje.channel.send("Empezó el bot");
    scrap = setInterval(scrapping.create(mensaje), 3000);
  }

  if (msg === "!stop") {
    clearInterval(scrap);
    scrap = null;
  }
});
