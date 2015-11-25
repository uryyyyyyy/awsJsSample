var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';

export function createBucket(name:string) {
    var s3bucket = new AWS.S3({params: {Bucket: 'uryyyyyyy-sandbox'}});
    s3bucket.createBucket(function() {
        var params = {Key: 'myKey', Body: 'Hello!!!!!!!!!!!!!!!!'};
        s3bucket.upload(params, (err:any, data:any) => {
            if (err) {
                console.log("Error uploading data: ", err);
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    });
}