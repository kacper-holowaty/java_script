'use strict';

function getCounter(min,max) {
    return function () {
        if (min > max) {
            console.log(undefined);
        }
        else {
            console.log(min)
        }
        min++;
    }
}
const counter = getCounter(5,7);
counter();
counter();
counter();
counter();