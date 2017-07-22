var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
   // What the data should look like
   // Models will be based on this blueprint
   imagePath: {type: String, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   price: {type: Number, required: true}
});

// Create a model from the schema
module.exports = mongoose.model('Product', schema);