/**
 * @description Controller Admin Product Category (Danh Mục Sản phẩm)
 * @author GIANG TRƯỜNG
*/

const ProductCategory = require('../../models/product-category.model');

const filterHelper = require('../../helper/filter.helper');
const searchHelper = require('../../helper/search.helper');
const paginationHelper = require('../../helper/pagination.helper');

// [GET] /admin/products-category
module.exports.index = async (req, res) => {
    try {
        // mặc định sẽ lấy ra những sản phẩm chưa bị xóa
        const findObject = {
            deleted: false
        }

        // bộ lọc trạng thái
        if(req.query.status) findObject.status = req.query.status;
        const filterStatusArray = filterHelper.filterStatus(req.query);

        // tính năng tìm kiếm theo keyword
        let keyword = "";
        const searchObject = searchHelper.searchKeyword(req.query);
        if(searchObject.keywordRegex !== "")
            findObject.title = searchObject.keywordRegex;

        // đếm số lượng sản phẩm (theo các tiêu chí bên trên)
        const quantityRecords = await ProductCategory.countDocuments(findObject);

        // sắp xếp
        const sortObject = {};
        let sortKey =   req.query.sortKey || 'position';
        let sortValue = req.query.sortValue || 'desc';
        sortObject[sortKey] = sortValue;

        // phân trang
        const paginationObject = paginationHelper.pagination(req.query, quantityRecords);

        // tìm kiếm database
        const records  = await ProductCategory.find(findObject)
                                        .limit(paginationObject.limit)
                                        .skip(paginationObject.skip)
                                        .sort(sortObject)

        
        res.render("admin/pages/products-category/index", {
            title: "Danh mục sản phẩm",
            records,
            filterStatusArray, // khối giao diện bộ lọc trạng thái
            keyword: searchObject.keyword,
            paginationObject
        });
    }
    catch(error) {
        console.log(error);
    }
}

// [PATCH] /admin/products-category/change-status/:id/:status
module.exports.changeStatus = async (req, res) => {
    try{
        const {id, status} = req.params;
        
        const statusValid = ["active", "inactive"];

        if(statusValid.includes(status) === false) {
            req.flash('warning', 'Trạng thái gửi lên không hợp lệ');
            res.redirect('back');
        }

        // cập nhật trạng thái
        await ProductCategory.updateOne(
            {
                _id: id
            },
            {
                status: status
            }
        );
        req.flash('success', 'Thay đổi trạng thái sản phẩm thành công');
        res.redirect('back');
    }
    catch(error) {

    }
}
