const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const productSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        img: { type: String },
        title: { type: String },
        start: { type: Number, default: 0},
        evaluate: { type: Number , default: 0},
        color: { type: Array },
        price : { type: Number },
        trademark: { type: String },
        category: { type: String },
        sold: { type: Number, default: 0},
        slug: { type: String, slug: 'name' },
        slugCategory: { type: String, slug: 'category' },
        slugTrademark: { type: String, slug: 'trademark' },
    },
    {
        timestamps: true,
    },
);

productSchema.plugin(mongooseDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: 'all',
    validateBeforeDelete: true,
});

module.exports = mongoose.model('product', productSchema);