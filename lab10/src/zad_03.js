class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    diff(vector) {
        this.x = this.x - vector.x
        this.y = this.y - vector.y
    }
    multiplyBy(number) {
        this.x = this.x * number
        this.y = this.y * number
    }
    toString() {
        console.log(`x: ${this.x} y: ${this.y}`);
    }
}
const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

vector1.toString(); // x: 10 y: 10

vector1.diff(vector2);
vector1.toString(); // x: 5 y: 0

vector1.multiplyBy(2);
vector1.toString(); // x: 10 y: 0

class Ship {
    constructor(faction, position, strength, health) {
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }
    getDistance(enemyShip) {
        if (enemyShip !== undefined && enemyShip instanceof Ship) {
            console.log(Math.round(Math.sqrt(((enemyShip.position.x-this.position.x)*(enemyShip.position.x-this.position.x))+((enemyShip.position.y-this.position.y)*(enemyShip.position.y-this.position.y)))*100)/100)
        }
        else ("Nie znamy położenia jednego ze statków!")
    }
    checkHealth() {
        if (this.health < 0) {
            console.log("Statek został zniszczony!");
        }
        else {
            console.log("Zdrowie statku wynosi: "+this.health);
        }
    }
    getDamage(amount) {
        this.health = this.health - amount
        if (this.health < 0) {
            console.log("Statek został zniszczony!");
        }
        else {
            console.log(`Statek otrzymał ${amount} obrażeń! Jego zdrowie wynosi: ${this.health}`);
        }
    }
    makeDamage(enemyShip) {
        enemyShip.health = enemyShip.health - this.strength
        if (enemyShip.health < 0) {
            console.log(`Statek ${enemyShip.faction} został zniszczony!`);
        }
        else {
            console.log(`Statek ${enemyShip.faction} otrzymał ${this.strength} obrażeń!`);
        }
    }
}

class RebelShip extends Ship {
    constructor(position,strength,health) {
        super(position,strength,health)
        this.faction = "Rebel Alliance"
    }
    hyperspeed() {
        this.position = undefined;
    }
}

class DeathStar extends Ship {
    constructor(position) {
        super(position)
        this.faction = "Empire";
        this.deathRayAvailable = true;
    }
    makeDamage(enemyShip) {
        enemyShip.health = enemyShip.health - 10
        if (enemyShip.health < 0) {
            console.log(`Statek ${enemyShip.faction} został zniszczony!`);
        }
        else {
            console.log(`Statek ${enemyShip.faction} otrzymał 10 obrażeń!`);
        }
    }
}

const foo = new Ship("GGGD", new Vector2(5,3), 10, 43)
foo.getDistance(new Ship("ENEMY",new Vector2(14,-6),32,21))

const wrog = new RebelShip(new Vector2(1,9), 34, 8)

const gwiazdaSmierci = new DeathStar(new Vector2(10,10))

gwiazdaSmierci.makeDamage(wrog);