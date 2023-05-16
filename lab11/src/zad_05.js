function take3(func,x,y) {
    const interval = setInterval(() => {
        func()
    }, x*1000);
    setTimeout(() => {
        clearInterval(interval)
    }, y*1000);
}
take3(() => console.log("Wywołanie funkcji!"),1,6)