let AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';
import Promise = require("bluebird");
let iam = new AWS.IAM();

export function createGroup(groupName:string):Promise<any> {
    let params  = {
        GroupName: groupName, /* required */
        Path: '/aaa/'
    };
    return new Promise((resolve, reject) => {
        let func = (err:any, data:any) => {
            if (err) reject(err);
            else resolve(data);
        };
        iam.createGroup(params, func);
    });
}

export function createUser(userName:string):Promise<any> {
    let params = {
        UserName: userName
    };
    return new Promise((resolve, reject) => {
        let func = (err:any, data:any) => {
            if (err) reject(err);
            else resolve(data);
        };
        iam.createUser(params, func);
    });
}

export function createPolicy(policyName:string):Promise<any> {
    let params = {
        PolicyDocument: '{"Version": "2012-10-17", "Statement": [{"Effect": "Allow","Action": "*","Resource": "*"}]}', /* required */
        PolicyName: policyName, /* required */
        Description: 'allow all actions'
    };
    return new Promise((resolve, reject) => {
        let func = (err:any, data:any) => {
            if (err) reject(err);
            else resolve(data);
        };
        iam.createPolicy(params, func);
    });
}

export function attachGroupPolicy(policyName:string, groupName:string):Promise<any> {
    let params = {
        GroupName: groupName, /* required */
        PolicyArn: policyName /* required */
    };
    return new Promise((resolve, reject) => {
        let func = (err:any, data:any) => {
            if (err) reject(err);
            else resolve(data);
        };
        iam.attachGroupPolicy(params, func);
    });
}

export function addUserToGroup(userName:string, groupName:string):Promise<any> {
    let params = {
        GroupName: groupName, /* required */
        UserName: userName /* required */
    };
    return new Promise((resolve, reject) => {
        let func = (err:any, data:any) => {
            if (err) reject(err);
            else resolve(data);
        };
        iam.addUserToGroup(params, func);
    });
}