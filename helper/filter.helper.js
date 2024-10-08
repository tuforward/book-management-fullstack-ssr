/**
 * @description HELPER FILTER
 * @access      ADMIN (QUẢN LÝ TRANG WEB)
 * @exports     HELPER
 * @author      GIANG TRƯỜNG
 */


//  BỘ LỌC TRẠNG THÁI
module.exports.filterStatus = (query) => {
    const filterStatusBlock = [
        {
            title : "Tất cả",
            status: "",
            class : ""
        },
        {
            title : "Hoạt động",
            status: "active",
            class : ""
        },
        {
            title : "Dừng hoạt động",
            status: "inactive",
            class : ""
        },
    ];

    if(query.status) {
        const indexOfStatus = filterStatusBlock.findIndex(item => item.status === query.status);

        filterStatusBlock[indexOfStatus].class = "filter__list-item--active";
    }
    else {
        filterStatusBlock[0].class = "filter__list-item--active";
    }

    return filterStatusBlock;
}