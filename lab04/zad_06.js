'use strict';

const sum = (n,a=1,suma=0) => {
    if (a===n+1) return suma
    else {
        return sum(n,a+1,suma+a)
    }
} 
console.log(sum(4));