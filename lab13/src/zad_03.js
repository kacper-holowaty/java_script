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
const funTab1 = [f11(),f12(),f13(),f14(),f15()]
const funTab2 = [f21(),f22(),f23(),f24(),f25()]

const grupuj = (funTab1, funTab2, cb) => {
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)]).then(res => console.log(res))
};
grupuj(funTab1,funTab2,x => console.log(x))