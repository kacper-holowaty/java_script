'use strict';

const persons = [
    { name: 'Jan', age: 22 },
    { name: 'Grzegorz', age: 19 },
    { name: 'Halina', age: null },
    { name: 'Agata', age: 24 },
    { name: 'Krzysztof', age: 40 },
    { name: 'Adam', age: 29 }
  ]

function sortPerson(arr) {
    let helper = []
    arr.filter(a => (typeof a.age === "number")).sort((a,b) => a.age - b.age).forEach(person => {
        helper.push(person.name)
    });
    return helper;
}
console.log(sortPerson(persons));