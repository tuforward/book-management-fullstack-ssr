/** import & require package */
const express = require('express')
require('dotenv').config();

/** import & require code of dev  */
const routerAdmin = require('./routes/admin/index.route');
const database    = require('./config/database');

/** express js */
const app = express();
const port = process.env.PORT || 3000;

/** template engines - pug */
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));  /**   static file     */
database.connect();                 /**   database        */
routerAdmin(app);                   /**   router admin    */

/** listen server */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})