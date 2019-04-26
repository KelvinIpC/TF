var express = require('express');
var router = express.Router();
const uuid = require('uuid');



var docClient = new AWS.DynamoDB.DocumentClient();
/* GET home page. */
router.get('/', function(req, res, next) {
  var params = {
    TableName: 'tf_dev',

    Item: {
      req_id: uuid.v1(),
      category: '123123',
      name: '123123123',
      time: (new Date()).getTime()
    }
  }
  docClient.put(params, function (err, data) {
    if (err) {
      console.log(err)
      res.send(err);
    } else {
      console.log('123123123')
      res.send('create item success.');
    }
  });
  // res.send('nothing')
});

module.exports = router;
