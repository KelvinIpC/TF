// import Date from 'Date';
import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient();
import {reqTableName, region} from '../config/keys';
import * as uuid from 'uuid';


var save = async function(req, req_type){
  try{
    let params = {
      TableName: reqTableName,
  
      Item: {
        req_id: uuid.v1(),
        req_type:req_type,
        req_body:req.body,
        req_head:req.header,
        req_param:req.param,
        req_cookies: req.cookies,
        req_a: req.url,
        tl_id: 12332123123,
        time: (new Date()).getTime()
      }
    }
    var data = await docClient.put(params).promise();
    return data
  }catch(err){
    throw err;
  }
}

console.log('123123',reqTableName)
var find = async function(req, req_type){
  try{
    let params = {
      TableName: reqTableName,
  
      KeyConditionExpression:"tl_id = :r",
      ExpressionAttributeValues: {
        ":r":req.param.tl_id
      }
  
    };
    var result = await docClient.query(params).promise();
    return result
  }catch(err){
    throw err;
  }
}
var count = async function(req){

}
var remove = async function(req, req_type){

}
var removeAll = async function(req){

}

var all = async function(){
  
}
export {
  save,
  find,
  all,
  count,
  remove,
  removeAll
}

