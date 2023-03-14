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
const counter = getCounter(5,7); //tzw. closure, bez tego się nie da
counter();
counter();
counter();
counter();