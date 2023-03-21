'use strict';

const games = require('./games.js').games;

const res = games.reduce((akum,elem) => {
    if (elem.imageUrl !== '' && akum.length<4) {
        return [...akum,elem.imageUrl]
    }
    else {
        return [...akum]
    }
},[])
console.log(res);