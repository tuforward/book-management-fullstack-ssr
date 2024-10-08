/**
 * @description CONTROLLER PRODUCT
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     CONTROLLER
 * @author      GIANG TRƯỜNG
 */

/** import & require helper */
const filterHelper = require('../../helper/filter.helper');

/** model */
const Product = require('../../models/product.model');

// [GET] /admin/dashboard
module.exports.index = async (req, res) => {
    try{
        // object tìm kiếm trong database
        const findDb = {
            deleted: false
        }

        // Bộ Lọc Trạng Thái
        if(req.query.status) findDb["status"] = req.query.status;

        const filterStatusBlock = filterHelper.filterStatus(req.query);


        // Lấy dữ liệu từ database
        let records = await Product.find(findDb);
        
        res.render("admin/pages/products/index", {
            title: `Danh sách sản phẩm`,
            records,
            filterStatusBlock
        });
    }
    catch(error) {
        console.error("Error Product", error);
    }
}