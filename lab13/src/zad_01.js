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
const cb = (res) => console.log(res);

const poKolei = (fun1, fun2, cb) => {
    let a = 3;
    fun1(a,(res => fun2(res,(x => cb(x)))))
};
poKolei(func1,func2,cb)