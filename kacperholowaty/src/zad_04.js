const func1 = (arg,cb) => {
    setTimeout(() => {
        arg *= 2
        console.log("po 1 funkcji: "+arg);
        cb(arg)
    }, 4000);
}
const func2 = (arg,cb) => {
    setTimeout(() => {
        arg += 4
        console.log("po 2 funkcji: "+arg);
        cb(arg)
    }, 1000);
} 
const func3 = (arg,cb) => {
    setTimeout(() => {
        arg -= 2
        console.log("po 3 funkcji: "+arg);
        cb(arg)
    }, 8000);
} 
const func4 = (arg,cb) => {
    setTimeout(() => {
        arg *= 10
        console.log("po 4 funkcji: "+arg);
        cb(arg)
    }, 4000);
} 
const funTab = [func1,func2,func3,func4]


const zliczPoKolei = (funTab, threshold, cb) => {
    let index = 0;
    let n = 2
    let liczbaFunkcji = 0;
    const nextFunction = (res) => {
        if (index >= funTab.length) {
            cb(liczbaFunkcji)
            return;
        }
        funTab[index](res,res => {
            index++;
            if (res > threshold) {
                liczbaFunkcji++
            }
            nextFunction(res)
        })
    }
    nextFunction(n)
}
zliczPoKolei(funTab,7,x => console.log("Wynik", x))