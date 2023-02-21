let arr = [1, 5, 6, 5, 5, 1, 5]

for (let i = 0; i < arr.length; i++) {
    licznik = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i]==arr[j]) {
            licznik ++ 
        }
    }
    if (licznik===1) {
        console.log(arr[i]+" występuje "+licznik+" raz");
    }    
    else {
        console.log(arr[i]+" występuje "+licznik+" razy");
    }
}