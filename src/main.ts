import iam = require("./util/iam");
import s3 = require("./util/s3");


// Hello, TypeScript! と表示される
console.log(iam.hello());
s3.createBucket("name");