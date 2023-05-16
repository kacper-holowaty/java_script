function multiplyAsync(x,y) {
    return new Promise((resolve, reject) => {
        if (typeof x === "number" && typeof y === "number") {
            resolve(x * y)
        }
        else {
            reject("Oba argumenty muszą być liczbami!")
        }
    }).then(res => console.log(res)).catch((err) => console.log(err))
}
multiplyAsync(1,19)