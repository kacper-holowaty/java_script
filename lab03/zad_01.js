'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co wypisze funkcja dla każdego z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val1, val2) {
    (val1 == val2) ? console.log('A') : console.log('B');
    (val1 === val2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2'); //A D
// isEquals(null, undefined); //A D
// isEquals(undefined, NaN); //B D 
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); //B D
// isEquals(0, ''); //A D
// isEquals('0', ''); //B D
// isEquals(+0, -0); //A C
// isEquals(0, false); //A D 
// isEquals(0, 'false'); //B D
// isEquals([1, 2], '1,2'); //A D

// Co zwróci kazde z ponizszych wyrazen?
!!false; //false
!!true; //true
!!undefined; //false
!!null; //false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person);
// person = {};
// console.log(person); // wyrzuca błąd, bo nie można zmieniać wartości const

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

/*
Wyświetli
3
4
3
*/
// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// Co zostanie wyświetlone na ekranie?
/*
[ [ 1, 2 ], 3, 4 ]
[ 1, 2, 3, 4 ]
*/
// Wyjaśnij wynik
/* 
w newArr1 za arr jest przypisane [1,2]
w newArr2 za arr jest przypisane [1,2], lecz następuje spłaszczenie tej tablicy stąd wynik [1,2,3,4]
*/
// const word = 'javascript';
// const arrWord = [...word];
// console.log(arrWord);
/*
[
    'j', 'a', 'v', 'a',
    's', 'c', 'r', 'i',
    'p', 't'
]
*/
// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result); //NaN, nie można podzielić stringa przez liczbę

// console.log(Number.isNaN(result)); // true
// console.log(Number.isNaN(hello)); // false

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

/*
var: Zmienne deklarowane za pomocą var mają tzw. zasięg funkcyjny. Oznacza to, że są one widoczne w całej funkcji,
w której zostały zadeklarowane. Poza funkcją, zmienna zadeklarowana za pomocą var staje się globalna
i jest widoczna dla całego programu. Zmienne te mogą być ponownie deklarowane i ich wartości mogą być modyfikowane.

let: Zmienne deklarowane za pomocą let mają zasięg blokowy, co oznacza, że są widoczne tylko w bloku,
w którym zostały zadeklarowane (np. wewnątrz pętli, warunków). Zmienne te nie mogą być ponownie deklarowane
w tym samym bloku i ich wartości mogą być modyfikowane.
*/
//  var car = 'BMW';

// function showCar() {
//     car = 'Audi';
//     model = 'A5';
//     console.log('Great car!');
// }

// showCar();

// console.log(car);
// console.log(model);

// -------

// var name = 'Bryan';

// function differentName() {
//     var name = 'Adam';
//     console.log(name);
// };

// differentName();

// console.log(name);

// -------

// if (true) {
//     var a = 2;
// }
// console.log(a); //wszystko dobrze!

// if (true) {
//     const b = 2;
// }
// console.log(b); //błąd: b is not defined

// -------

// Dla sprawdzenia działania obu poniższych pętli odkomentuj najpierw jedną, później drugą.
// Jaki będzie rezultat jeśli obie pętle bedą odkomentowane jednocześnie. Wyjaśnij dlaczego.

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// rezultat: 0...10 0...10
// -------

// var test = "var1";
// var test = "var2"; //wszystko dobrze!

// let test2 = "let1";
// let test2 = "let2"; //krzyczy błąd

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

//Tryb ścisły, który pozwala uniknąć błędów programistycznych takich jak np. używanie niezadeklarowanych zmiennych.