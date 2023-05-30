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
const cb = (arr) => console.log(arr); 

const razem = (fun1, fun2, cb) => {
    //let arr = [null,null] i wstawiać na indexsy arr[0] = x w fun1 i fun2 // w zad 5 forEach
    let x = 3
    let arr = [];
    fun1(x,x => {
        arr.push(x)
        console.log(arr);
    })
    fun2(x,x => {
        arr.push(x)
        console.log(arr);
    })
    // cb(arr);
    // if (arr.length == 2) {
    //     cb(arr)
    //     // console.log(arr);
    // }
};
razem(func1,func2,cb)