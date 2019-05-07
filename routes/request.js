var express = require('express');
var router = express.Router();

import * as db from '../db';
/* GET home page. */

console.log(db)
router.get('/', async function (req, res, next) {
  try {
    let result = await db.request.save(req, 'GET');
    res.json({
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      statusCode: 500,
      errorMessage: err
    });
  }

});

router.post('/', async function (req, res, next) {
  try {
    let result = await db.request.save(req, 'POST');
    res.json({
      status: 200
    });
  } catch (err) {
    res.json({
      statusCode: 500,
      errorMessage: err
    });
  }

});


router.get('/fetch_request', async function (req, res) {
  const params = {
    TableName: keys.TableName,

    KeyConditionExpression:"tl_id = :r",
    ExpressionAttributeValues: {
      ":r":req.param.tl_id
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