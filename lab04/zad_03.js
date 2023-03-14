'use strict';

function fun1() {
    const a = 5;
    return function fun2(b) {
        return a+b
    }
}
console.log(fun1()(4))