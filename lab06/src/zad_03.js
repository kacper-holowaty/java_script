const ships = require('./ships.js').shipsArray;

const result = ships.reduce((akum,elem) => {
    if (elem.destroyed === false) {
        if (akum[elem.manufacturer] === undefined) {
            akum[elem.manufacturer] = [];
        }
        akum[elem.manufactured].push()
    }
},[]);
