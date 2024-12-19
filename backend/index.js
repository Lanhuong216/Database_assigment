require('dotenv').config();
var bodyParser = require('body-parser');

const express = require('express');
const app = express();
const empRouter = require('./routes/employeeRoute')
const orderRouter = require('./routes/orderRoute')
const productRouter = require('./routes/productRoute')
const customerRouter = require('./routes/customerRoute')
const marketingRouter = require('./routes/marketingRoute')
var cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Returns middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

app.use(bodyParser.json());

app.use('/api/employee', empRouter)
app.use('/api/order', orderRouter)
app.use('/api/product', productRouter)
app.use('/api/customer', customerRouter)
app.use('/api/marketing', marketingRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
