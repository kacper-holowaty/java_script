'use strict';

const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];

function check(arr) {
    console.log(arr.some(a => a!=="null"));
    console.log(arr.find(a => typeof a === "string"));
    console.log(arr.findIndex(a => a === true));
    console.log(arr.filter(a => typeof a === "number").sort((a,b)=> a-b));
}
check(arr)