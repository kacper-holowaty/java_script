'use strict';

const cat = { 
    name: 'Filemon', 
    age: 6 
}

// console.log(`Kot ma na imię ${cat.name} i ma ${cat.age} lat.`);

// zadanie 5 i 6

cat.description = `Kot ma na imię ${cat.name} i ma ${cat.age} lat. `
console.log(cat.description);

cat.breed = "dachowiec"
cat.colour = "biały"

cat.description = cat.description+`Jest rasy ${cat.breed} i ma kolor ${cat.colour}`
console.log(cat.description);