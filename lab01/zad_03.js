let tablica = [2,-4,7,13,-9,0,7,4]
for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}

let max = tablica[0]
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] > max) {
        max = tablica[i]
    }
}
console.log("Największa wartość: "+max);

let min = tablica[0]
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] < min) {
        min = tablica[i]
    }
}
console.log("Najmniejsza wartość: "+min);

let reversed = []
for (let i = tablica.length-1; i >= 0; i--) {
    reversed.push(tablica[i])
}
console.log(reversed);