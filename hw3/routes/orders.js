//Lute Lillo Portero

const { json } = require('express');
var express = require('express');
var router = express.Router();

//Create the array of objects to be send as the request.
var arrayOfObjects = [{
  "topping": "cherry",
  "quantity": 2
}, {
  "topping": "plain",
  "quantity": 6
}, {
  "topping": "chocolate",
  "quantity": 3
}];


/* POST orders listing to the client request */
router.post('/', function(req, res, next) {
    
    res.send(arrayOfObjects);
   
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Orders page');
});

module.exports = router;