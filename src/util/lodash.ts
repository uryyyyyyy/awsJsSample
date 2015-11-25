var _ = require("lodash");

export function sample():number[] {
    let arr:string[] = ["1", "2"];
    let func:(v:string) => number = v => Number(v) +1;
    return _.map(arr, func);
}