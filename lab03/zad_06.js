'use strict';

function isAnyEven(array) {
    const wynik = array.some((a) => a%2===0)
    return wynik
}
console.log(isAnyEven([1, 4, 5, 3]));
console.log(isAnyEven([1, 3, 5, 3]));