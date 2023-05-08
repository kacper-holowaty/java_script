const hogwardArray = require('./potter.js').hogwardArray;

const resultArray = hogwardArray.reduce((akum, elem) => {
    if (elem.alive === true) {
        if (elem.house === "") elem.house = "noHouse"
        if (elem.hogwartsStudent === true) elem.type = "student";
        else if (elem.hogwartsStaff === true) elem.type = "staff";
        else if (!elem.hogwartsStudent && !elem.hogwartsStaff) elem.type = "none";
        const {name, type} = elem
        if (akum[elem.house] === undefined) {
            akum[elem.house] = [{name,type}];
        } 
        else {
            (akum[elem.house]).push({name, type})
        }
    }
    return akum;
}, {});
console.log(resultArray);
  