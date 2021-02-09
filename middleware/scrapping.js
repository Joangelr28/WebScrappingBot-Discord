const Scrapping = require("../class/Scrapping");

let scrap = new Scrapping();

let saved = [];
let new_products = [];

module.exports = {
  async is_stock(message) {
    let products = scrap.get_products();
    new_products = [];

    products.forEach((product) => {
      if (saved[product.primaryKey] == null) {
        saved[product.primaryKey] = product;
        new_products.push(product);
      } else {
        if (saved[product.primaryKey].update(product)) {
          new_products.push(product);
        }
      }
    });

    if (new_products.length > 0) {
      new_products.forEach((product) => {
        message.channel.send(product.print());
      });
    }
  },
};
