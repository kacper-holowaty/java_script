'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const helper = [];

for (let i = 0; i < numbers.length; i++) {
    let czyJest = true
    for (let j = i+1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            czyJest = false
        }
    } 
    if (czyJest === true) {
        helper.push(numbers[i])
    }
}
console.log(helper);

