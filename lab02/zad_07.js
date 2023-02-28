'use strict';

const person1 = {
    name: "Agata",
    age: 21
}
const person2 = {
    name: "Tomasz",
    age: 25
}
const person3 = {
    name: "Alicja",
    age: 31
}
const person4 = {
    name: "Jan",
    age: 20
}
const osoby = [];
osoby.push(person1,person2,person3,person4)

let sumaWieku = 0;
for (let i = 0; i < osoby.length; i++) {
    sumaWieku = sumaWieku+osoby[i].age
}
console.log(sumaWieku)

const sredniaWieku = sumaWieku/osoby.length
console.log(sredniaWieku);

// zadanie 8

const ponizej = [];
const powyzej = [];

for (let i = 0; i < osoby.length; i++) {
    if (osoby[i].age < sredniaWieku) {
        ponizej.push(osoby[i].name)
    }
    if (osoby[i].age > sredniaWieku) {
        powyzej.push(osoby[i].name)
    }
}
console.log(ponizej);
console.log(powyzej);