'use strict';

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
]

//a
const koszt = wishlist.reduce((akum,elem) => {
    return akum+1.23*elem.netto 
},0)
console.log(koszt);

//b
const wartosci = wishlist.reduce((akum,elem) => {
    return [...akum,elem.netto]
},[])
console.log(wartosci);

//c
const func = function(arr,util) {
    const res = arr.reduce((akum,elem) => {
        return [...akum,util(elem)]
    },[])
    return res;
}
const newArray = func(wishlist, (x) => x.name + ": " + x.netto);
console.log(newArray);

//d
const func2 = function(arr,util) {
    const res = arr.reduce((akum,elem) => {
        if (util(elem)) {
            return [...akum,elem]
        }
        else {
            return [...akum]
        }
    },[])
    return res;
}

const newArray2 = func2(wishlist, (x) => x.netto < 500)
console.log(newArray2)

//e
const func3 = function(arr,util) {
    const res = arr.reduce((akum,elem) => {
        if (util(elem)) {
            return elem;
        }
        else {
            return akum;
        }
    },[])
    if (res===[]) {
        return undefined;
    }
    else {
        return res;
    }
}

const result = func3(wishlist, (x) => x.name === 'Mikser');  
console.log(result)