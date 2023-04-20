const _ = require('lodash');

class CoffeeShop {
    constructor(name,menu) {
        this.name = name,
        this.menu = menu,
        this.orders = [],
        this.addOrder = function(item) {
            const inMenu = menu.find((obiekt) => {
                return obiekt.item === item
            })
            if (inMenu === undefined) {
                console.log("This item is currently unavailable!");
            }
            else {
                this.orders.push(item);
                console.log("Order added!");
            }
        }
        this.fulfillOrder = function() {
            if (this.orders.length > 0) {
                console.log(`The ${this.orders[0]} is ready!`);
                this.orders = _.drop(this.orders,1);
            }
            else {
                console.log("All orders have been fulfilled!");
            }
        }
        this.listOrder = function() {
            console.log(this.orders);
        }
        this.dueAmount = function() {
            const res = this.orders.reduce((akum,elem) => {
                const suma = menu.reduce((acc,el) => {
                    if (elem === el.item) {
                        return acc + el.price
                    }
                    else {
                        return acc
                    }
                },0)
                return suma + akum
            },0)
            console.log(res);
        }
        this.cheapestItem = function() {
            const theCheapest = menu.reduce((akum,elem) => {
                if (akum.price > elem.price) {
                    return elem
                }
                else {
                    return akum
                }
            });
            console.log(theCheapest.item);   
        }
        this.drinksOnly = function() {
            const res = menu.reduce((akum, elem) => {
                if (elem.type === "drink") {
                    return [...akum,elem.item]
                }
                else {
                    return [...akum]
                }
            },[])
            console.log(res);
        }
        this.foodOnly = function() {
            const res = menu.reduce((akum, elem) => {
                if (elem.type === "food") {
                    return [...akum, elem.item]
                }
                else {
                    return [...akum]
                }
            },[])
            console.log(res);
        }
    }
}
const obj = new CoffeeShop("Shop1",[
      { item: "cinnamon roll", type: "food", price: 4.99 },
      { item: "hot chocolate", type: "drink", price: 2.99 },
      { item: "lemon tea", type: "drink", price: 2.50 }
    ])

obj.addOrder("espresso"); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)

obj.addOrder("hot chocolate"); // "Order added!"
obj.addOrder("cinnamon roll"); // "Order added!"

obj.listOrder(); // ["hot chocolate", "cinnamon roll"]

obj.dueAmount(); // 7.98 (suma cen za hot chocolate i cinnamon roll)

obj.fulfillOrder(); // "The hot chocolate is ready!"
obj.fulfillOrder(); // "The cinnamon roll is ready!"
obj.fulfillOrder(); // "All orders have been fulfilled!" (Wszystkie zamówienia zostały zrealizowane)

obj.listOrder(); // []

obj.dueAmount(); // 0.0

obj.cheapestItem(); // "lemon tea"
obj.drinksOnly(); // ["hot chocolate", "lemon tea"]
obj.foodOnly(); // ["cinnamon roll"]