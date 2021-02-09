const bot = require("./bot");
const scrapping = require("./middleware/scrapping");

let scrap = null;

bot.on("message", async (mensaje) => {
  let msg = mensaje.content;

  if (msg === "!start" && scrap == null) {
    mensaje.channel.send("Empezó el bot");
    scrap = setInterval(await scrapping.is_stock(mensaje), 180000);
  }

  if (msg === "!stop") {
    clearInterval(scrap);
    scrap = null;
  }
});
