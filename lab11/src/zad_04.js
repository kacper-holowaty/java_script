const a = setInterval(() => {
    console.log("Welcome");
}, 1000);

setTimeout(() => {
    clearInterval(a)    
}, 6000);
