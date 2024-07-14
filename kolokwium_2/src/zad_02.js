const products = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 5, quantity: 4 },
    { name: 'Product 3', price: 8, quantity: 3 },
    { name: 'Product 4', price: 12, quantity: 1 },
];
  

const calculateProductValue = (product, cb) => {
    setTimeout(() => {
      const value = product.price * product.quantity;
      cb(value);
    }, Math.floor(Math.random() * 1000));
};

const calculateTotalValue = (n,cb) => {
    
    let arr = Array(n).fill(null)
    for (let i = 0; i < n; i++) {
        calculateProductValue(products[i],x => {
            arr[i] = x
            if (arr.every(x => x !== null)) {
                const sum = arr.reduce((akum,elem) => akum+elem,0)
                cb(sum)
            }
        }) 
    }
}
calculateTotalValue(3, (response) => {
    console.log('Wynik', response);
}); 
