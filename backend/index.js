require('dotenv').config();

const express = require('express');
const app = express();
const empRouter = require('./routes/employeeRoute')
const orderRouter = require('./routes/orderRoute')

var cors = require('cors');
const PORT = 3000;

app.use(cors());
app.get('/api/employee', async (req, res) => {
  try {
    connection.connect(function (err) {
      if (err) throw err;
      connection.query("SELECT * FROM Employee", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

app.use('/api/employee', empRouter)
app.use('/api/order', orderRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
