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
        console.log(a);
        let a = 10;
    }
    catch(error) {
        console.error("Error Dashboard", error);
    }
}