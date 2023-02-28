'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const helper = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length+1; j++) {
        if (numbers[i] !== numbers[j]) {
            helper.push(numbers[i])
        }
    } 
}
console.log(helper);

