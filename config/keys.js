import keys from './dev';

const region = process.env.REGION || keys.region;
const accessKeyId = process.env.ACCESS_KEY_ID || keys.accessKeyId;
const secretAccessKey = process.env.SECRET_ACCESS_KEY || keys.secretAccessKey;
const reqTableName = process.env.REQ_TABLE_NAME || keys.reqTableName;

export {
    region,
    accessKeyId,
    secretAccessKey,
    reqTableName
}

