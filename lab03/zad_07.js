'use strict';

function sortWords(array) {
    array.sort(function(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } 
        else {
            // return a.localeCompare(b); //zadziała, tylko nie wiem do końca czym jest ta funkcja
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    if (a[i] < b[i]) {
                        return -1;
                    }  
                    else if (a[i] > b[i]){
                        return 1;
                    }
                }
            }
            return 0;
        }
    });
    return array;
}
console.log(sortWords(['pies', 'kot', 'chomik', 'królik', 'wiewiórka']));
