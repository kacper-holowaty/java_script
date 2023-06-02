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
const cb = (arr) => console.log("Rezultat: "+arr); 

const razem = (fun1, fun2, cb) => {
    let x = 3;
    let arr = [null,null];
    fun1(x,x => {
        arr[0] = x
        console.log(arr);
        if (arr[0] && arr[1]) {
            cb(`[${arr[0]}, ${arr[1]}]`)
        }
    })
    fun2(x,x => {
        arr[1] = x
        console.log(arr);
        if (arr[0] && arr[1]) {
            cb(`[${arr[0]}, ${arr[1]}]`)
        }
    })
};
razem(func1,func2,cb)