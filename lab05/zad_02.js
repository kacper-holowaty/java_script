'use strict';

const arr = [-5,4,-2,4,-5];

const res = arr.reduce((akum,elem) => {
    if (elem < 0) {
        return [...akum,elem*elem]
    }
    else {
        return [...akum,elem]
    }
},[])
console.log(res);