/** IMPORT & REQUIRE PACKAGE */
const express = require('express')
require('dotenv').config();

/** IMPORT & REQUIRE CODE OF DEV  */
const routerAdmin = require('./routes/admin/index.route');
const database    = require('./config/database');

/** EXPRESS JS */
const app = express();
const port = process.env.PORT || 3000;

/** ROUTER ADMIN & CLIENT */
routerAdmin(app);

/** CONNECT DATABSE */
database.connect(); 

/** LISTEN SERVER */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})