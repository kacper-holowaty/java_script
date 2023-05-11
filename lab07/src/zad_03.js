function checkExchange(arr) {
    const kasa = {'5': 0, '10': 0, '20': 0};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            kasa['5'] += 1;
        }
        else if (arr[i] === 10) {
            if (kasa['5'] > 0) {
                kasa['10'] += 1;
                kasa['5'] -= 1;
            }
            else {
                return false;
            }
        }
        else if (arr[i] === 20) {
            if (kasa['10'] > 0 && kasa['5'] > 0) {
                kasa['20'] += 1;
                kasa['10'] -= 1;
                kasa['5'] -= 1;
            }
            else if (kasa['10'] === 0 && kasa['5'] > 2) {
                kasa['20'] += 1;
                kasa['5'] -= 3;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
console.log(checkExchange([5, 5, 5, 10, 20])); // => true
console.log(checkExchange([5, 5, 10, 10, 20])); // => false
console.log(checkExchange([10, 10])); // => false
console.log(checkExchange([5, 5, 10])); // => true