function counter(maks,milisekundy) {
    return function() {
        let i = 1
        const interval = setInterval(() => {
            console.log("Liczba: "+i);
            return i++
        }, milisekundy);
        setTimeout(() => {
            clearInterval(interval)
        }, (maks+1)*milisekundy);
    }
}
counter(5,2000)()

