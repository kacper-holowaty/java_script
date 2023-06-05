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
            resolve(false)
        }, 8000);
    })
}
const fun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 1000);
    })
}
const fun4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, 3000);
    })
}
const funTab = [fun1(),fun2(),fun3(),fun4()];

const razemTab = (funTab, cb) => {
    Promise.all(funTab).then(res => cb(res))
};
razemTab(funTab, x => console.log(x))

// to samo nie używając Promise.all
const myPromisesToTab = (promises,cb) => {
    return promises.reduce((acc, promise) => {
        return acc.then(results => {
          return promise.then(value => {
            results.push(value);
            return results;
          });
        });
      }, Promise.resolve([])).then(results => cb(results));
}

myPromisesToTab(funTab, x => console.log(x))
//fragment kodu z wykładu:
//ten program po prostu printuje pokolei wszystkie resolve z promisów
const myPromises = (promises,cb) => {
    return promises.reduce((acc,promise) => {
        return acc.then(value => {
            console.log(value);
            return promise;
        })
}).then(value => cb(value))
}
// myPromises(funTab, x => console.log(x))

// za pomocą forEach NIE MOŻNA tego zrobić. Wynikiem jest wówczas: [ 8, 2, 'foo', false ]
/*
const myPromWithForEach = async (promises,cb) => {
    const results = [];
    promises.forEach(promise => {
        promise.then(value => {
            results.push(value)
            if (promises.length === results.length) {
                cb(results)
            }
        })
    })

}
*/
// myPromWithForEach(funTab,x => console.log(x))