let czasSukces;

const checkTime = (arg, maxTries) => {
    let liczbaProb = 0;
    const interval = setInterval(() => {
        if (liczbaProb >= maxTries) {
            clearInterval(interval);
            console.log("Limit prób przekroczony");
            checkTime(arg - 1000, maxTries)
        }
        else if (Date.now() >= arg){
            clearInterval(interval)
            const obecnyCzas = new Date(arg)
            czasSukces = obecnyCzas.toLocaleTimeString()
            console.log(`Czas upłynął: '${czasSukces}'!`);
        }
        else {
            console.log("Sprawdzam ponownie");
            liczbaProb++
        }
    },1000)
}
checkTime(Date.now()+10000,5)
setTimeout(() => console.log(czasSukces),12000) // Wywołanie musi być zawarte poza funkcją checkTime