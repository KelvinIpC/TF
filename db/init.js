import AWS from 'aws-sdk';
import {region, accessKeyId, secretAccessKey} from '../config/keys';
AWS.config.update({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});