var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

var ResJson = require('../../../common/response-json');



var data =Mock.mock({
    'list|22-215': [{
        'id|+1': 1,
        'name': '@string'
    }]
});

router.get('/users', function(req, res) {
  
   console.log("users run........................................");
   console.log(ResJson)
    // console.log(ResJson.getResJson(data.list))
   res.setHeader('Content-Type', 'application/json;charset=utf-8');  
   res.json(ResJson.getResJson(data.list));
   // res.json(data.list);
});

router.get('/users/:id', function(req, res) {

  console.log("users id  run........................................");
   if (data.length <= req.params.id || req.params.id < 0) {
      res.statusCode = 404;
      return res.send('Error 404: No data found')
   }

   console.log("req.params.id", req.params.id);
   console.log(data.list[req.params.id]);
   res.json(ResJson.getResJson(data.list[req.params.id]));
   // res.json(data.list[req.params.id]);
})

router.post('/users', function(req, res) {

  if (typeof req.body.name === "undefined" ||
      typeof req.body.description === "undefined" ||
      typeof req.body.price === "undefined") {
      res.statusCode = 400;
      res.send('Error 400: data properties missing');
   }else{

   	 var newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
   }

   console.log(newProduct);
   data.push(newProduct);
   res.statusCode = 201;
   res.location('/data/' + data.length);
   res.json(true);


   }

	
  
  
});


module.exports = router;
