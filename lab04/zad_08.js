'use strict';

function getCounter(min,max) {
    return function pomocnicza() {
        if (min > max) {
            console.log(undefined);
        }
        else {
            console.log(min);
            min = min+1
        }
    }
}
getCounter(5,7)();
getCounter(5,7)();
getCounter(5,7)();