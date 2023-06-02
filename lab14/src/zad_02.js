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