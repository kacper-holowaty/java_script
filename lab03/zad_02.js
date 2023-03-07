'use strict';

function isPositiveEven(number) {
    const up = (number > 0) ? "większa" : "mniejsza"
    const even = (number%2===0) ? "parzysta" : "nieparzysta"

    if (number===0) {
        console.log("Liczba jest równa zero.");
    }
    else {
        console.log("Liczba "+number+" jest "+up+" od zera i jest "+even+".");
    }
}
isPositiveEven(-4)