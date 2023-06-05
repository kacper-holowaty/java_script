// Napisz funkcję:

// const razem = (fun1, fun2, fun3, cb) => n => { 
//   // Uzupełnij tutaj
// };
// taką, że:

// pierwszymi trzema parametrami są funkcje asynchroniczne, gdzie jednym z parametrów jest n, będące liczbą.
// funkcja razem powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane 
// zostaną przekazane – jako tablica [wynik1, wynik2, wynik3] do funkcji cb.czwartym argumentem jest „callback” cb,
//  czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje. Deklaracja funkcji razem ma pozostać w podanym kształcie.
// UWAGA (!) Aby końcowe rozwiązanie było kompletne, powinno zawierać wszystkie parametry potrzebne do wywołania funkcji 
// (deklaracje funkcji asynchrocznych i callback'u) oraz jej przykładowe wywołanie.

const fun1 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n=n*5
            resolve(n)
        }, 3000);
    })
}
const fun2 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n=n-1
            resolve(n)
        }, 8000);
    })
}
const fun3 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n=n+4
            resolve(n)
        }, 1000);
    })
}
const razem = (fun1,fun2,fun3,cb) => {
    let n = 5;
    Promise.all([fun1(n),fun2(n),fun3(n)]).then(res => cb(res))
}
razem(fun1,fun2,fun3,x => console.log(x))