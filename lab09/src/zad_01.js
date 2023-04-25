/*
przykład:
class Food {
    constructor (name) {
        this.name = name,
        this.prepare = function() {
            console.log(`Preparing ${this.name}...`);
        }
        cook() {
            console.log(`Cooking ${this.name}...`);
        }
        get serve() {
            console.log(`Serving ${this.name}...`);
        }
    }
}
const banan = new Food("banan")
banan.prepare() // nie działamy na prototypie, zajmujemy więcej miejsca w pamięci
banan.cook() // optymalna metoda
banan.serve // jeśli mamy get to nie trzeba dodawać (), aby wywołać funkcję
*/


class Food {
    constructor(name, ingredients) {
        this.name = name,
        this.ingredients = ingredients
    }
    prepare() {
        console.log(`Preparing ${this.name}...`);
    }
    cook() {
        console.log(`Cooking ${this.name}...`);
    }
    serve() {
        console.log(`Serving ${this.name}...`);
    }
}

class Pizza extends Food {
    constructor(name, ingredients, toppings) {
        super(name, ingredients),
        this.toppings = toppings
    }
    mix() {
        console.log("Mixing pizza dough...");
    }
    bake() {
        console.log("Baking pizza in oven...");
    }
    serve() {
        console.log(`Serving ${this.name} with ${this.toppings}`);
    }
}

class Salad extends Food {
    constructor(name, ingredients, dressing) {
        super(name, ingredients)
        this.dressing = dressing
    }
    mix() {
        console.log("Mixing salad ingredients...");
    }
    serve() {
        console.log(`Serving ${this.name} with ${this.dressing} dressing...`);
    }
}

const pizza = new Pizza("Margherita", ["flour", "tomatoes", "mozzarella"], ["basil"]);
pizza.prepare();
pizza.mix();
pizza.bake();
pizza.serve();

const salad = new Salad("Caesar", ["lettuce", "croutons", "Parmesan cheese"], "Caesar");
salad.prepare();
salad.mix();
salad.serve();