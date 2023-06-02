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
            resolve("XD")
        }, 2000);
    })
}
const f14 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 2000);
    })
}
const f15 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, 2000);
    })
}
const f21 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("js :o")
        }, 2000);
    })
}
const f22 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(false)
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
            resolve("kocham js")
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

const grupuj = (funTab1, funTab2, cb) => {
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)]).then(res => {
        const arr = res;
        if (arr[0] > arr[1]) {
            for (let i = 0; i < arr[0].length; i++) {
                // arr[1].push(0)
                if (arr[1][i] === undefined) {
                    arr[1].push(0)
                }
            }
        }
        else if (arr[0] < arr[1]) {
            for (let i = 0; i < arr[1].length; i++) {
                if (arr[0][i] === undefined) {
                    arr[0].push(0)
                }
            }
        };
        // const pogrupuj = arr.forEach(elem => {
            
        // });
        let wynik = [];
        for (let i=0; i < arr[0].length; i++) {
            elem1 = arr[0][i];
            elem2 = arr[1][i];
            wynik.push([elem1,elem2])
        }
        cb(wynik)
    })

};
grupuj(funTab1,funTab2,x => console.log(x))