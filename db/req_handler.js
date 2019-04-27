const docClient = new AWS.DynamoDB.DocumentClient();


const req_params = {
    TableName: 'tf_dev',

    Item: {
      req_id: uuid.v1(),
      req_type: 'POST',
      req_body:req.body,
      req_head:req.header,
      req_param:req.param,
      req_cookies: req.cookies,
      req_a: req.url,
      tl_id: req.body.id,
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