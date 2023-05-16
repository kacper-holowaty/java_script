const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Porażka")
    }, 2000);
    
})
prom.then(res => console.log(res))  
    .catch(err => console.log(err))