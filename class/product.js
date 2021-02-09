//Clase que contiene los datos de los productos
class product {
  constructor(
    primaryKey,
    image,
    brand,
    gender,
    model,
    oldPrice,
    price,
    offPrice,
    newProduct = true
  ) {
    this.primaryKey = primaryKey;
    this.image = image;
    this.brand = brand;
    this.gender = gender;
    this.model = model;
    this.oldPrice = oldPrice;
    this.price = price;
    this.offPrice = offPrice;
    this.newProduct = newProduct;
  }
}
