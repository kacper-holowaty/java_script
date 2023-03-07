'use strict';

const numberSplit = function(number) {
    if (number%2===0) {
        return [number/2,number/2]
    }
    else {
        return [Math.round(number/2-1),Math.round(number/2)]
    }
}

console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));
