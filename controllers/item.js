var dbConnector = require('../repository/tediousconnector');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var Item = require('../models/item');

function getAllProduct(req, res) {
	var products = [];
	var request = new Request("dbo.crud_itemSelect", function(err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      res.json(products);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function(columns) {
    products.push(new Item(columns));
  });

  dbConnector.callProcedure(request);
};

function saveProduct(req, res, product) {
  var products = [];
  var request = new Request("dbo.API_SaveProduct", function(err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      res.json(products);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function(columns) {
    products.push(new Item(columns));
  });

  request.addParameter('inId', TYPES.Int, product.id);
  request.addParameter('inName', TYPES.VarChar, product.name);
  request.addParameter('inDescription', TYPES.VarChar, product.description);

  dbConnector.callProcedure(request);
};

var controller = {
  getOne: function (req, res){
    //getPlayerAdjustmentRequest(req.params.id, req, res);
  },
  getAll: function (req, res){
    getAllProduct(req, res);
  },
  save: function (req, res){
    var product = {
      id: req.params.id,
      name: req.body.name,
      description: req.body.description
    };
    
    saveProduct(req, res, product);
  }  
};

module.exports = controller;

