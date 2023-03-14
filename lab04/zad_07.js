'use strict';

const arr = [1,2,3,4,3,2,1];

function isPalindrome(arr,first = 0, last = arr.length-1) {
    if (first > last) return true
    else {
        if (arr[first] !== arr[last]) {
            return false
        }
        else if (arr[first] === arr[last]) {
            return isPalindrome(arr,first+1,last-1)
        }
    }
}
console.log(isPalindrome(arr));