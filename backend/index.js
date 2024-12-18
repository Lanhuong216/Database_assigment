require('dotenv').config();

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
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true }))

app.use('/api/employee', empRouter)
app.use('/api/order', orderRouter)
app.use('/api/product', productRouter)
app.use('/api/customer', customerRouter)
app.use('/api/marketing', marketingRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
