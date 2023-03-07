'use strict';

function unequal(a,b,c) {
    if (a===b || a===c || b===c) {
        return false
    }
    else {
        return true
    }
}

console.log(unequal(1,2,3));
console.log(unequal(1,1,2));