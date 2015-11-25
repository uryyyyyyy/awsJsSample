var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';

export function createBucket(bucketName:string) {
    var s3bucket = new AWS.S3();
    var params1 = {
        Bucket: bucketName, /* required */
    };
    s3bucket.createBucket(params1, function() {
        var params = {Bucket: bucketName, Key: 'myKey', Body: 'Hello!!!!!!!!!!!!!!!!'};
        s3bucket.upload(params, (err:any, data:any) => {
            if (err) {
                console.log("Error uploading data: ", err);
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    });
}