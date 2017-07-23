var express = require('express');
var router = express.Router();
var Product = require('../models/product')

// Get home page
router.get('/', function(req, res, next) {
  // List all items in product
  Product.find(function(err, docs) {
    // List 3 products each row
    var productChunks = [];
    // Defines how many products per row
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      // Update productChunks array with sliced data
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks })
  });
});

module.exports = router;
