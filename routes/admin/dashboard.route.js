/**
 * @description ROUTER DASHBOARD
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     ROUTE
 * @author      GIANG TRƯỜNG
 */

/** import & require package */
const express = require('express');

/** import & require code of dev  */
const controller = require('../../controllers/admin/dashboard.controller');

/** create instance router */
const router = express.Router();

/** access */
router.get(
    '/',
    controller.dashboard
)

/** export */
module.exports = router;