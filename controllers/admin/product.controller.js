/**
 * @description CONTROLLER PRODUCT
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     CONTROLLER
 * @author      GIANG TRƯỜNG
 */

// [GET] /admin/dashboard
module.exports.index = (req, res) => {
    try{
        res.send("PRODUCT")
    }
    catch(error) {
        console.error("Error Product", error);
    }
}