/**
 * @description ROUTER ADMIN
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @param       app 
 * @exports     ROUTER ADMIN
 * @author      GIANG TRƯỜNG
 */


/** IMPORT & REQUIRE CODE OF DEV */
const systemConfig = require('../../config/system.config');
const dashboardRouter = require('./dashboard.route');


/** EXPORT */
module.exports = (app) => {
    const PATH_ADMIN = systemConfig.PATH_ADMIN;

    app.use(
        PATH_ADMIN +  `/dashboard`,
        dashboardRouter
    )
}