
const fun1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 4000);
    })
}
const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 1000);
    })
}

const fun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 4000);
    })
}
const fun4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 1000);
    })
}

const porownaj = (fun1,fun2,cb) => {
    let arr = [null,null];
    fun1().then(x => {
        arr[0] = x;
        // console.log(arr);
        if (arr[0] && arr[1]) {
            if (arr[0] === arr[1]) {
                cb(true)
            }
            else {
                cb(false)
            }
        }
    })
    fun2().then(x => {
        arr[1] = x;
        // console.log(arr);
        if (arr[0] && arr[1]) {
            if (arr[0] === arr[1]) {
                cb(true)
            }
            else {
                cb(false)
            }
        }
    })
}
porownaj(fun1,fun2,x => console.log(x))
porownaj(fun3,fun4,x => console.log(x))