var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

var users = require('./users/users');
var products = require('./products/products');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
});


router.use('', products);
router.use('', users);
module.exports = router;
