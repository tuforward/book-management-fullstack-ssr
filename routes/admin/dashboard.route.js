/**
 * @description ROUTE DASHBOARD
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     ROUTE
 * @author      GIANG TRƯỜNG
 */

/** IMPORT & REQUIRE CODE PACKAGE */
const express = require('express');

/** CREATE INSTANCE ROUTER */
const router = express.Router();

/** ACCESS */
router.get(
    '/',
    (req, res) => res.send("GIANG TRUONG")
)

/** EXPORT */
module.exports = router;