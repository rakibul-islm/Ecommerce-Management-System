const db = require('../util/database');

module.exports = class Accepted_order {
  constructor(id, order_id, product_id, quantity) {
    this.id = id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM `accepted_order`');
  }

  static post(id) {
    return db.execute('INSERT INTO `accepted_order`(`date`, `time`, `order_id`, `product_id`, `quantity`)  SELECT DATE_FORMAT(NOW(),"%Y-%m-%d"),DATE_FORMAT(NOW(),"%h:%i %p"), `order_id`,`product_id`,`quantity` FROM orders_details WHERE id = ?', [id]);
  }


  static delete(id) {
    return db.execute('DELETE FROM `accepted_order` WHERE id = ?', [id]);
  }
};
