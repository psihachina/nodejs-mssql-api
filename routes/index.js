var express = require('express');
var router = express.Router();

var item = require('../controllers/item');

router.get('/api/v1/item', item.getAll);
router.put('/api/v1/product/:id', item.save);

 module.exports = router;