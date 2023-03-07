'use strict';

function sortWords(array) {
    return array.sort((a,b) => {
        if (a.length === b.length) {
            return array.sort()
        }
        else {
            return a.length - b.length
        } 
    })
}
console.log(sortWords(['pies', 'kot', 'jamnik','chomik', 'królik', 'wiewiórka']));

//to be continued