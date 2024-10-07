/** IMPORT & REQUIRE PACKAGE */
const express = require('express')
require('dotenv').config();

/** IMPORT & REQUIRE CODE OF DEV  */
const routerAdmin = require('./routes/admin/index.route');

/** EXPRESS JS */
const app = express();
const port = process.env.PORT || 3000;

/** ROUTER ADMIN & CLIENT */
routerAdmin(app);

/** LISTEN SERVER */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})