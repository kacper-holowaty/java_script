'use strict';

const lista = require('./shoppingList.js').shoppingList;

//a
const ileNabial = lista.reduce((akum,elem) => {
    if (elem.typ === 'nabiał') {
        return akum+elem.cena*elem.ilosc
    }
    else {
        return akum
    }
},0)  
console.log(ileNabial);

//b
const naKilogramy = lista.reduce((akum,elem) => {
    if (elem.jednostka === "kg") {
        return [...akum,elem.produkt]
    }
    else {
        return [...akum]
    }
},[]).sort()
console.log(naKilogramy);

//c
// const zakupyString = lista.reduce((akum,elem) => {
//     if (akum[elem.typ] === undefined){
//         akum[elem.typ] = []
//     }
//     akum[elem.typ].push(elem.produkt)
//     return akum;
// },[])//to musi być w postaci tablicy obiektów żeby zadziałało
// console.log(zakupyString);
// const wynik = zakupyString.reduce((acc,item) => {
//     const key = Object.keys(item)[0];
//     const value = item[key].reduce((prev,curr,index) => {
//         return `${prev}${index+1}. ${curr}\n`
//     },'')
//     return `${acc}${key}: \n${value}\n`
// },'')
// console.log(wynik);

const zakupyString = lista.reduce((akum,elem) => {
    if (akum[elem.typ] === undefined) {
        akum[elem.typ] = [];   
    }
    const {produkt} = elem;
    akum[elem.typ].push({produkt})
    return akum;
},[])
const nazwyTypow = Object.keys(zakupyString)
const wynik = nazwyTypow.reduce((akum,elem) => {
    const products = zakupyString[elem];
    const reszta = products.reduce((acc,el,index) => {
        return `${acc}${index+1}. ${el.produkt}\n`
    },"")
    return `${akum}${elem}:\n${reszta}\n`
},"")
console.log(wynik);