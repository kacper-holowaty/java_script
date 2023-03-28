const ships = require('./ships.js').shipsArray;

const result = ships.reduce((akum, elem) => {
    if (elem.destroyed === false) {
        if (akum[elem.manufacturer] === undefined) {
            akum[elem.manufacturer] = [];
        }
        // const {height, maximumSpeed} = elem;
        (akum[elem.manufacturer]).push({[elem.model]: {"height": elem.height, "maximumSpeed": elem.maximumSpeed}});
    }
    return akum;
}, {});
console.dir(result, { depth: null });
