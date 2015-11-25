import iam = require("./util/iam");
import s3 = require("./util/s3");

import server = require("./util/server");
import lodash = require("./util/lodash")
import Promise = require("bluebird");

let promise = iam.createGroup("myGroup");
let promise2 = iam.createPolicy("mypolicy");
let promise3 = iam.createUser("myUser");

Promise.all([promise, promise2, promise3]).then((arr:any[]) => {
    console.log(arr);
    iam.attachGroupPolicy(arr[1].Policy.Arn, arr[0].Group.GroupName);
    iam.addUserToGroup(arr[2].User.UserName, arr[0].Group.GroupName);
});

//console.log(iam.hello());
//s3.createBucket("uryyyyyyy-sandbos");
//server.start();
let arr = lodash.sample();
console.log(arr);