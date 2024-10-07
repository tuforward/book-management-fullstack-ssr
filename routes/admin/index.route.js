/**
 * @description ROUTER ADMIN
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @param       app 
 * @exports     ROUTER ADMIN
 * @author      GIANG TRƯỜNG
 */


/** import & require code of dev  */
const systemConfig = require('../../config/system.config');
const dashboardRouter = require('./dashboard.route');


/** export */
module.exports = (app) => {
    const PATH_ADMIN = systemConfig.PATH_ADMIN;

    app.use(
        PATH_ADMIN +  `/dashboard`,
        dashboardRouter
    )
}