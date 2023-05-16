const prom = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Udało się!")
    }, 5000);
})
prom.then(x => console.log(x))