/**
 * @description CONTROLLER PRODUCT
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     CONTROLLER
 * @author      GIANG TRƯỜNG
 */

/** model */
const Product = require('../../models/product.model');

// [GET] /admin/dashboard
module.exports.index = async (req, res) => {
    try{
        // object tìm kiếm trong database
        const findDb = {
            status: "active",
            deleted: false
        }

        // Lấy dữ liệu từ database
        let records = await Product.find({});
        

        res.render("admin/pages/products/index", {
            title: `Danh sách sản phẩm`,
            records
        });
    }
    catch(error) {
        console.error("Error Product", error);
    }
}