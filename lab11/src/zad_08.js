function multiplyAsync(x,y) {
    return new Promise((resolve, reject) => {
        if (typeof x === "number" && typeof y === "number") {
            resolve(x * y)
        }
        else {
            reject("Oba argumenty muszą być liczbami!")
        }
    })
}
multiplyAsync(3,19).then(res => console.log(res)).catch((err) => console.log(err))
multiplyAsync(3,"k").then(res => console.log(res)).catch((err) => console.log(err))