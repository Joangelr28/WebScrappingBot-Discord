const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

class Scraping {
  aux = [];

  async getProducts() {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(
      "https://www.innvictus.com/tenis-para-hombre/c/100010002000000000"
    );
    await page.waitForSelector("div.is-pw__products", {
      timeout: 1000,
    });

    const body = await page.evaluate(() => {
      return document.querySelector("body").innerHTML;
    });
    var $ = cheerio.load(body);

    $("div.is-pw__product").each((i, elements) => {
      link = $(elements).find("a.js-gtm-product-click").attr("href");
      productCode = $(elements)
        .find("a.js-gtm-product-click")
        .attr("data-productcode");

      this.aux.push(i, link, productCode);
    });

    return this.aux.length;
  }
}
