const fun1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000);
    })
}
const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000);
    })
}
const fun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 2000);
    })
}
const przetwarzaj = ((a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*10)
        }, 4000);
    })
})

const funTab = [fun1(),fun2(),fun3()]

const connect = (funTab, fun) => {
    Promise.all(funTab).then(res => {
        let resultArray = [];
        let helper = [];
        res.forEach(num => {
            helper.push(fun(num))
        });
        Promise.all(helper).then(przetworzone => {
            for (let i = 0; i < funTab.length; i++) {
                const wyn = res[i];
                const wyn_funkcji = przetworzone[i];
                resultArray.push([wyn,wyn_funkcji])
            }
            console.log(resultArray);
        })
    })
};
connect(funTab,przetwarzaj)