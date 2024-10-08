/**
 * @description MODEL PRODUCT
 * @exports     MODEL
 * @author      GIANG TRƯỜNG
 */

/** import & require package */
const mongoose = require('mongoose');
    
/** define schema */
const productSchema = mongoose.Schema(
    {
        title:  String,     
        slug: String,       // slug
        author: String,     // id của model author
        category: String,   // id của model category
        thumbnail: String,  // link ảnh
        description: String,
        price: Number,
        discountPercentage: Number,
        stock: Number,
        sold:  Number,      // đã bán được ...
        position: Number,
        status: String,
        deleted: {
            type: Boolean,
            default: false
        },
        featured: Boolean   // nổi bật
    }
);

/** create model */
const Product = mongoose.model('Product', productSchema, 'products');

/** exports */
module.exports = Product;