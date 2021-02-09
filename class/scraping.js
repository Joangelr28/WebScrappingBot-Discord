const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const bot = require("../config/bot");

class Scraping {
  async getProducts() {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(
      "https://www.milanuncios.com/anuncios/bmw.htm?fromSearch=1&fromSuggester=1"
    );
    await page.waitForSelector("div.is-pw__products", {
      timeout: 1000,
    });

    const body = await page.evaluate(() => {
      return document.querySelector("body").innerHTML;
    });
    var $ = cheerio.load(body);
    let aux = [];

    $("div.is-pw__product").each((i) => {
      aux.push(i);
    });

    return aux.length;
  }
}
