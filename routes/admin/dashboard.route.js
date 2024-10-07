/**
 * @description ROUTER DASHBOARD
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     ROUTE
 * @author      GIANG TRƯỜNG
 */

/** IMPORT & REQUIRE CODE PACKAGE */
const express = require('express');
const controller = require('../../controllers/admin/dashboard.controller');

/** CREATE INSTANCE ROUTER */
const router = express.Router();

/** ACCESS */
router.get(
    '/',
    controller.dashboard
)

/** EXPORT */
module.exports = router;