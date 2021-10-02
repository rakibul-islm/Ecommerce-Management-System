const db = require('../util/database');

module.exports = class Grocery {
  constructor(id,title,short_desc,price,quantity,description,image,images,cat_id) {
    this.id = id;
    this.title = title;
    this.short_desc = short_desc;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.image = image;
    this.images = images;
    this.cat_id = cat_id;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM `products`');
  }

  static post(title, image, images, description, price, quantity, short_desc, cat_id) {
    return db.execute('INSERT INTO `products`(`title`, `image`, `images`, `description`, `price`, `quantity`, `short_desc`, `cat_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [title, image, images, description, price, quantity, short_desc, cat_id]);
  }

  static update(title, image, images, description, price, quantity, short_desc, cat_id, id) {
    return db.execute('UPDATE `products` SET `title`=?, `image`=?, `images`=?, `description`=?, `price`=?, `quantity`=`quantity`+?, `short_desc`=?, `cat_id`=? WHERE `id`=?', [title, image, images, description, price, quantity, short_desc, cat_id, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM `products` WHERE id = ?', [id]);
  }
};
