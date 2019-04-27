const AWS = require('aws-sdk');
const keys = require('../config/keys');
AWS.config.update({
  region: keys.region,
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});



// module.exports = {
//   req_params,
// }