var express = require('express');
var router = express.Router();
var Mock = require('mockjs');



var products = [
   { name: 'apple juice', description: 'good', price: 12.12 },
   { name: 'banana juice', description: 'just so sos', price: 4.50 }
]

router.get('/products', function(req, res) {
   res.setHeader('Content-Type', 'application/json;charset=utf-8');  
   res.json(products);
});

router.get('/products/:id', function(req, res) {
   if (products.length <= req.params.id || req.params.id < 0) {
      res.statusCode = 404;
      return res.send('Error 404: No products found')
   }
   res.json(products[req.params.id]);
})

router.post('', function(req, res) {

  if (typeof req.body.name === "undefined" ||
      typeof req.body.description === "undefined" ||
      typeof req.body.price === "undefined") {
      res.statusCode = 400;
      res.send('Error 400: products properties missing');
   }else{

   	 var newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
   }

   console.log(newProduct);
   products.push(newProduct);
   res.statusCode = 201;
   res.location('/products/' + products.length);
   res.json(true);


   }

	
  
  
});


module.exports = router;
