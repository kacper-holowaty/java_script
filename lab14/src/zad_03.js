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
    }, 2000);
}
const func3 = (arg,cb) => {
    setTimeout(() => {
        arg -= 1
        console.log("po 3 funkcji: "+arg);
        cb(arg)
    }, 4000);
} 
const func4 = (arg,cb) => {
    setTimeout(() => {
        arg *=10 
        console.log("po 4 funkcji: "+arg);
        cb(arg)
    }, 2000);
}
const funTab = [func1,func2,func3,func4];

const poKolei = (funTab, cb) => (n) => {
    let index = 0;
    const nextFunction = (res) => {
        if (index >= funTab.length) {
            cb(res)
            return;
        }
        funTab[index](res,res => {
            index++;
            nextFunction(res)
        })
    }
    nextFunction(n)

};
poKolei(funTab,x => console.log("Końcowa wartość wynosi: "+x))(3)


// albo za pomocą tablicy funkcji zwracających promise:

const prom1 = (arg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arg *= 2;
            console.log("po 1 funkcji: " + arg);
            resolve(arg);
        }, 4000);
    });
};
  
const prom2 = (arg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arg += 4;
            console.log("po 2 funkcji: " + arg);
            resolve(arg);
        }, 2000);
    });
};
  
const prom3 = (arg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arg -= 1;
            console.log("po 3 funkcji: " + arg);
            resolve(arg);
        }, 4000);
    });
};
  
const prom4 = (arg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arg *= 10;
            console.log("po 4 funkcji: " + arg);
            resolve(arg);
        }, 2000);
    });
};

const promTab = [prom1,prom2,prom3,prom4]

const poKoleiOnPromises = (funTab, cb) => (n) => {
    let index = 0;
    const nextFunction = (res) => {
        if (index >= funTab.length) {
            cb(res)
            return;
        }
        funTab[index](res).then(res => {
            index++;
            nextFunction(res)
        })
    }
    nextFunction(n)

};
setTimeout(() => poKoleiOnPromises(promTab,x => console.log("Końcowa wartość wynosi: "+x))(3),10000)
