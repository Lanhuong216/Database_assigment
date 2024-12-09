const express = require('express');
require('dotenv').config();

const app = express();
const webRouters = require('./routes/employeeRoutes')
var cors = require('cors');
const PORT = 3000;
app.use(cors());
app.use('/api/employee', webRouters)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
