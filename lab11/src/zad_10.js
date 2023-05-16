let x = null;
let licznik = 0;

function startCounter() {
    x = setInterval(function(){
        licznik++
        console.log(licznik);
    },1000)
}
// startCounter()

function stopCounter() {
    clearInterval(x)
}
// stopCounter()

function clearCounter() {
    licznik = 0;
}
// clearCounter()
