//User is coming from mongoDB Schema
//in human term - a template to create a user
const Product = require("../model/Products");
//exporting an object with key and value
module.exports = {
  getAllProducts: function (callback) {
    console.log('it works in controller1');
    //User.find({}) is a mongoose function to query the database
    //it takes in a callback - that returns two parameters - the first one
    //is always error and the second one is payload (Users data)
    Product.find({}, function (err, payload) {
      // err = {
      //   error: true,
      //   message: "Something is wrong",
      // };
      console.log('it works in controller2');
      if (err) {
        callback(err, null);
      } else {
        
        callback(null, payload);
      }
    });
  },

  getProductByID: function (id, callback) {
    console.log('it works in controller1');
    Product.findById({ _id: id }, function (err, payload) {
      console.log('it works in controller2');
      if (err) {
        console.log('darn error');
        callback(err, null);
      } else {
        console.log('payload');
        callback(null, payload);
      }
    });
  },

  createProduct: function (body, callback) {
    let createdProduct = new Product({
      productName: body.productName,
    });

    createdProduct.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },

  updateProductByID: function (id, body, callback) {
    Product.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true },
      function (err, updatedPayload) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedPayload);
        }
      }
    );
  },
  deleteProductByID: function (id, callback) {
    Product.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
};



