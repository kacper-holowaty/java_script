'use strict';

function toArray(a,b) {
    if (typeof a ==="object" && typeof b === "object" && a!==null && b!==null) {
        return [...a,...b]
    }
    if (typeof a ==="object" && typeof b !== "object" && a!==null) {
        return [...a,b]
    }
    if (typeof a !=="object" && typeof b === "object" && b!==null) {
        return [a,...b]
    } 
    else {
        return [a,b]
    }
}
console.log(toArray(1, 2));
console.log(toArray(1, "tekst"));
console.log(toArray("aa", [1, 2]));
console.log(toArray([1], null));
