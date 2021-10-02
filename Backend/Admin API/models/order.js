const db = require('../util/database');

module.exports = class Order {
  constructor(id,order_id,product_id,quantity) {
    this.id = id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM `orders_details` ORDER BY `id` DESC');
  }




  static delete(id) {
    return db.execute('DELETE FROM `orders_details` WHERE id = ?', [id]);
  }
};
