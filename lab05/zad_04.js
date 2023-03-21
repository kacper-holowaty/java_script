'use strict';

const arr = [1, 3, 6, 2, 9];

const res = arr.reduce((akum,elem,index) => {
    return [...akum,`${index}: ${elem}`]
},[])
console.log(res);