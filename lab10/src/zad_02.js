const hogwardArray = require('./potter.js').hogwardArray;

const helper = hogwardArray.reduce((akum, elem) => {
    if (elem.house === '') elem.house = 'noHouse';
    if (elem.hogwartsStaff === true) elem.type = 'staff';
    else if (elem.hogwartsStudent === true) elem.type = 'students';
    else if (!elem.hogwartsStudent && !elem.hogwartsStaff) elem.type = 'none';
    const {name, type} = elem
    if (akum[elem.house] === undefined) {
        akum[elem.house] = [];
    }
    (akum[elem.house]).push({name, type})
    return akum;
},{})
const klucze = Object.keys(helper)
const result = klucze.reduce((akum, elem) => {
    const helpMe = helper[elem]
    const reszta = helpMe.reduce((acc, item) => {
        if (acc[item.type] === undefined) acc[item.type] = [];
        acc[item.type].push(item.name)
        return acc;
    },{})
    akum[elem] = reszta
    return akum;
},{})
console.dir(result, {depth: null})