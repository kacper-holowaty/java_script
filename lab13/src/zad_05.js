
const promisesTab = [new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 4000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, 1000);
})]

const razem = (promisesTab, callback) => {
    const arr = new Array(promisesTab.length).fill(null);
    promisesTab.forEach((element,id) => {
        element.then(res => {
            arr[id] = res;
            if (arr.every(x => x !== null)) {
                callback(arr)
            }
        })
    })
}
razem(promisesTab,x => console.log(x))