const express = require('express')
const app = express()
const port = 3000

/** IMPORT & REQUIRE CODE OF DEV  */
const routerAdmin = require('./routes/admin/index.route');

/** ROUTER ADMIN & CLIENT */
routerAdmin(app);

/** LISTEN SERVER */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})