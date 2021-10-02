const express = require('express');

const bodyParser = require('body-parser');

const groceryRoutes = require('./routes/grocery');
const orderRoutes = require('./routes/order');
const accepted_orderRoutes = require('./routes/accepted_order');
const reportRoutes = require('./routes/report');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/products', groceryRoutes);
app.use('/order', orderRoutes);
app.use('/accepted_order', accepted_orderRoutes);
app.use('/report', reportRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));
