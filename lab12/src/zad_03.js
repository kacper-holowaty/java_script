const func1 = (a) => {
    return new Promise((resolve, reject) => {
        if (a > 4) {
            resolve(a+1)
        }
        else {
            reject(a*3)
        }
    })
} 
const func2 = (a) => {
    return new Promise((resolve, reject) => {
        if (a % 2 === 0) {
            resolve(a+1)
        }
        else {
            reject(a-3)
        }
    })
} 
const func3 = (a) => {
    return new Promise((resolve, reject) => {
        if (a > 7) {
            resolve(a-5)
        }
        else {
            reject(a+5)
        }
    })
} 
const cback = (result) => console.log(result); 

const poKolei = (fun1, fun2, fun3, cb) => {
    let a = 3;
    fun1(a)
    .then(res => {
        fun2(res)
        .then(res => {
            fun3(res)
            .then(res => {
                cb(res)
            })
            .catch(res => {
                cb(res)
            })
        })
        .catch(res => {
            fun3(res)
            .then(res => {
                cb(res)
            })
            .catch(res => {
                cb(res)
            })
        })
    })
    .catch(res => {
        fun2(res)
        .then(res => {
            fun3(res)
            .then(res => {
                cb(res)
            })
            .catch(res => {
                cb(res)
            })
        })
        .catch(res => {
            fun3(res)
            .then(res => {
                cb(res)
            })
            .catch(res => {
                cb(res)
            })
        })
    })
};
poKolei(func1,func2,func3,cback)