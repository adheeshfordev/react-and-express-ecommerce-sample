const Product = require('../models/Product')

const productList = async (req, res) => {
    try {
        const products = await Product.find({}, {_id: 0});
        res.json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { productList }