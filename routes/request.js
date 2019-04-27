var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const AWS = require('aws-sdk');
const keys = require('../config/keys');

var docClient = new AWS.DynamoDB.DocumentClient();
/* GET home page. */
router.get('/get', async function (req, res, next) {
  const req_params = {
    TableName: keys.TableName,

    Item: {
      req_id: uuid.v1(),
      req_type: 'GET',
      req_body: req.body,
      req_head: req.header,
      req_param: req.param,
      req_cookies: req.cookies,
      req_a: req.url,
      tl_id: req.body.id,
      time: (new Date()).getTime()
    }
  }
  try {
    const result = await docClient.put(req_params).promise();
    console.log(result);
    res.json({
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: 500,
      errorMessage: err
    });
  }

});

router.post('/post', async function (req, res, next) {
  var req_params = {
    TableName: keys.TableName,

    Item: {
      req_id: uuid.v1(),
      req_type: 'POST',
      req_body: req.body,
      req_head: req.header,
      req_param: req.param,
      req_cookies: req.cookies,
      req_a: req.url,
      tl_id: req.body.id,
      time: (new Date()).getTime()
    }
  }
  try {
    const result = await docClient.put(req_params).promise();
    console.log(result);
    res.json({
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: 500,
      errorMessage: err
    });
  }

});


router.get('/fetch_request', async function (req, res) {
  const params = {
    TableName: keys.TableName,

    KeyConditionExpression:"req_id = :r",
    ExpressionAttributeValues: {
      ":r":"0d200b20-68f9-11e9-9612-ad63cd00d636"
    }

  };

  try {
    const data = await docClient.query(params).promise();
    res.json({ statusCode: 200, body: JSON.stringify(data) });
  } catch (error) {
    res.json( {
      statusCode: 400,
      error: `Could not fetch: ${error.stack}`
    });
  }
});
module.exports = router;