/**
 * @description ROUTER PRODUCT
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     ROUTE
 * @author      GIANG TRƯỜNG
 */

/** import & require package */
const express = require('express');

/** import & require code of dev  */
const controller = require('../../controllers/admin/product.controller');

/** create instance router */
const router = express.Router();

/** use */
router.get(
    '/',
    controller.index
)

/** export */
module.exports = router;