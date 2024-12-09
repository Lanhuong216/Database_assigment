require('dotenv').config();

const express = require('express');
const app = express();
const empRouter = require('./routes/employeeRoute')
const orderRouter = require('./routes/orderRoute')

var cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use('/api/employee', empRouter)
app.use('/api/order', orderRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
