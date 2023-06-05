// const process = (wyn1, wyn2) => {
//   // Uzupełnij
// };

// const result = (funTab1, funTab2, func) => {
//   // Uzupełnij
// };

// result(tab1, tab2, process);
// Napisz funkcje result spełniającą poniższe warunki:

// dwoma pierwszymi argumentami funkcji są tablice funkcji asynchronicznych, których rezultatem są wartości liczbowe
// trzecim argumentem jest funkcja func przetwarzające wyniki kolejnych funkcji z tablic funTab1 i funTab2
// jeżeli tablice nie są równe, to przyjmujemy, że brakująca wartość wynosi 0
// funkcja result powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się "równolegle" i wyświetli je w formacie:
// [
//   wynik_funkcji_func(wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2),
//   // ...
// ];

const f11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 2000);
    })
}
const f12 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000);
    })
}
const f13 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 2000);
    })
}
const f14 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 2000);
    })
}
const f15 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 2000);
    })
}
const f21 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
const f22 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
}
const f23 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 2000);
    })
}
const f24 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(14)
        }, 2000);
    })
}
const f25 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
const funTab1 = [f11(),f12(),f13(),f14()]
const funTab2 = [f21(),f22(),f23(),f24(),f25()]

const process = (wyn1, wyn2) => {
    return wyn1+wyn2
};

const result = (funTab1, funTab2, func) => {
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)]).then(res => {
        const [tab1,tab2] = res;
        if (tab1.length > tab2.length) {
            for (let i = 0; i < tab1.length; i++) {
                if (tab2[i] === undefined) {
                    tab2.push(0)
                }
            }
        }
        else if (tab1.length < tab2.length) {
            for (let i = 0; i < tab2.length; i++) {
                if (tab1[i] === undefined) {
                    tab1.push(0)
                }
            }
        }
        const wynik = [];
        tab1.forEach((element,id) => {
            const toProcess = process(tab1[id],tab2[id])
            wynik.push(toProcess)
        });
        console.log(wynik);
    })
};


result(funTab1, funTab2, process);