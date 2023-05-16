const prom = new Promise((resolve, reject) => {
    let num = 7;
    if (num === 4) {
        resolve("Udało się!")
    }
    else {
        reject("Porażka")
    }
    
})
prom.then(res => console.log(res),err => console.log(err))  

// za pomocą catch:
prom.then(res => console.log(res))
    .catch(err => console.log(err))