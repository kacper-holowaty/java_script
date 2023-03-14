'use strict';

console.log((function(string){
    return string.split(" ").sort((a,b) => b.length-a.length)[0]
})("Ala ma kota"));