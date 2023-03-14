'use strict';

function fun1() {
    console.log("Jestem z fun1!");
}

function fun2(funkcja) {
    funkcja()
}
fun2(fun1);