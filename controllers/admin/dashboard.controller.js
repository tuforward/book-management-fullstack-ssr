/**
 * @description CONTROLLER DASHBOARD
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     CONTROLLER
 * @author      GIANG TRƯỜNG
 */

// [GET] /admin/dashboard
module.exports.dashboard = (req, res) => {
    try{
        res.send("DASHBOARD")
    }
    catch(error) {
        console.error("ERROR DASHBOARD", error);
    }
}