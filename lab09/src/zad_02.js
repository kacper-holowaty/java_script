class Tile {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        if (type !== "LAND" && type !== "WATER" && type !== "ICE") {
            console.log("Nieprawidłowy typ kafelka!");
        }
        else {
            this.type = type;
        } 
    }
    getTileInfo() {
        console.log(`${this.x},${this.y} ${this.type}`);
    }
} 
class Grid {
    height = null;
    width = null;
    grid = null;
    ships = [];
    constructor() {

    }
    generate(height, width) {
        this.height = height;
        this.width = width;
        this.grid = [];
        const types = ["LAND", "WATER", "ICE"];
        for (let i = 1; i <= this.height; i++) {
            this.grid.push([]);
            for (let j = 1; j <= this.width; j++) {
                const itemType = types[Math.floor(Math.random() * types.length)];
                this.grid[i-1].push(new Tile(j,i,itemType))
            }
        }
    }
    generatePredefined(height, width, predefinedTiles) {
        this.height = height;
        this.width = width;
        this.grid = [];
        const types = ["LAND", "WATER", "ICE"];
        for (let i = 1; i <= this.height; i++) {
            this.grid.push([]);
            for (let j = 1; j <= this.width; j++) {
                const itemType = types[Math.floor(Math.random() * types.length)];
                this.grid[i-1].push(new Tile(j,i,itemType));
                predefinedTiles.forEach(element => {
                    if (element.x === j && element.y === i) {
                        this.grid[i-1].splice(j-1, 1, element)
                    }
                });
            }
        } 
    } 
    getTile(x,y) {
        let exist = null;
        this.grid.forEach(element => {
            element.forEach(tile => {
                if (tile.x === x && tile.y === y) {
                    exist = tile;
                }
            })
        });
        return exist;
    }
    printGrid() {
        const helper = this.grid.reduce((akum, lista) => {
            const edit = lista.reduce((acc, item) => {
                if (item instanceof Tile) {
                    if (item.type === "WATER") {
                        return `${acc}  ~`
                    }
                    else if (item.type === "ICE") {
                        return `${acc}  x`
                    }
                    else if (item.type === "LAND") {
                        return `${acc}  o`
                    }
                }
                if (item instanceof Ship || item instanceof IcebreakerShip) {
                    if (item.direction === "E") {
                        return `${acc}  E`
                    }
                    else if (item.direction === "W") {
                        return `${acc}  W`
                    }
                    else if (item.direction === "N") {
                        return `${acc}  N`
                    }
                    else if (item.direction === "S") {
                        return `${acc}  S`
                    }
                }
            },'')
            return `${akum}\n${edit}`
        },'')
        console.log(helper);
    }
}
class Ship {
    constructor(x, y, direction, grid) {
        this.x = x;
        this.y = y;
        if (direction === "N" || direction === "S" || direction === "E" || direction === "W") {
            this.direction = direction;
        }
        else {
            this.direction = null;
        }
        this.grid = grid;
        this.grid.grid.forEach(lista => {
            lista.forEach((element,index,array) => {
                if (element.x === this.x && element.y === this.y && element.type === "WATER") {
                    array[index] = this;
                    this.grid.ships.push(this)
                }
                else if (element.x === this.x && element.y === this.y && element.type !== "WATER") {
                    console.log("Statek może być umieszczony tylko na wodzie!");
                }
            });
        });
    }
    turn(side) {
        if (side === "P" || side === "p") {
            if (this.direction === "N") this.direction = "E";
            else if (this.direction === "E") this.direction = "S";
            else if (this.direction === "S") this.direction = "W";
            else if (this.direction === "W") this.direction = "N";
        }
        else if (side === "l" || side === "L") {
            if (this.direction === "N") this.direction = "W";
            else if (this.direction === "E") this.direction = "N";
            else if (this.direction === "S") this.direction = "E";
            else if (this.direction === "W") this.direction = "S";
        }
    }
    sail () {
        if (this.direction === "N") {
            if (this.y === 1) {
                console.log("UPS! Koniec mapy.");
            }
            let isMoved = false;
            this.grid.grid.forEach((lista,numer,main) => {
                lista.forEach((element,index,array) => {
                    if (this.y-1 === element.y && element.x === this.x && element.type === "WATER" && isMoved === false) {
                        array[index] = this;
                        main[numer+1][index] = new Tile(index+1, numer+2, "WATER")
                        isMoved = true;
                        this.y = this.y-1;
                    }
                });
            });
        }
        if (this.direction === "S") {
            if (this.y === this.grid.length) {
                "UPS! Koniec mapy."
            }
            let isMoved = false;
            this.grid.grid.forEach((lista,numer,main) => {
                lista.forEach((element,index,array) => {
                    if (this.y+1 === element.y && element.x === this.x && element.type === "WATER" && isMoved === false) {
                        main[numer-1][index] = new Tile(index+1, numer, "WATER")
                        array[index] = this;
                        isMoved = true;
                        this.y = this.y+1;  
                    } 
                });
            });

        }
        if (this.direction === "E") {
            if (this.x === (this.grid)[0].length) {
                console.log("UPS! Koniec mapy.");
            }
            let isMoved = false;
            this.grid.grid.forEach((lista,numer) => {
                lista.forEach((element,index,array) => {
                    if (this.y === element.y && element.x === this.x+1 && element.type === "WATER" && isMoved === false) {
                        array[index] = this;
                        array[index-1] = new Tile(index, numer+1, "WATER")
                        isMoved = true;
                        this.x = this.x+1;
                    }
                });
            });
        }
        if (this.direction === "W") {
            if (this.x === 1) {
                console.log("UPS! Koniec mapy.");
            }
            let isMoved = false;
            this.grid.grid.forEach((lista,numer) => {
                lista.forEach((element,index,array) => {
                    if (this.y === element.y && element.x === this.x-1 && element.type === "WATER" && isMoved === false) {
                        array[index] = this;
                        array[index+1] = new Tile(index+2, numer+1, "WATER")
                        isMoved = true;
                        this.x = this.x-1;
                    }
                });
            });
        }
    }
    getShipInfo() {
        this.grid.grid.forEach(lista => {
            lista.forEach((elem) => {
                if (elem instanceof Ship && elem.x === this.x && elem.y === this.y) {
                    console.log(`x: ${this.x}, y: ${this.y}, direction: ${this.direction}`);
                }
            });
        });
    }
}
class IcebreakerShip /*extends Ship*/ { //gdy klasa IcebreakerShip dziedziczy po Ship, to pojawiają się błędy z this.grid itp. :(
    constructor (x, y, grid) {
        // super(x,y);
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.direction = "N"
        this.grid.grid.forEach(lista => {
            lista.forEach((element,index,array) => {
                if (element.x === this.x && element.y === this.y && (element.type === "WATER" || element.type === "ICE")) {
                    array[index] = this;
                    this.grid.ships.push(this)
                }
                else if (element.x === this.x && element.y === this.y && element.type !== "WATER") {
                    console.log("Statek nie może być umieszczony na lądzie!");
                }
            });
        });
    }
    turn () {
        if (this.direction === "N") this.direction = "S"
        else if (this.direction === "S") this.direction = "N"
        else if (this.direction === "E") this.direction = "W"
        else if (this.direction === "W") this.direction = "E"
    }
    sail() {
        if (this.direction === "N") {
            if (this.y === 1) {
                console.log("UPS! Koniec mapy.");
            }
            this.grid.grid.forEach((lista,numer,main) => {
                lista.forEach((element,index,array) => {
                    if (this.y-1 === element.y && element.x === this.x && (element.type === "WATER" || element.type === "ICE")) {
                        this.y = this.y-1;
                        array[index] = this;
                        main[numer+1][index] = new Tile(index+1, numer+2, "WATER")
                        if (element.type === "ICE") {
                            console.log("Statek napotkał lądolód, przedarł się przez niego");
                        }
                    }
                    else if (this.y-1 === element.y && element.x === this.x && element.type === "LAND") {
                        this.turn("P")
                    }
                });
            });
        }
        if (this.direction === "S") {
            if (this.y === this.grid.length) {
                "UPS! Koniec mapy."
            }
            this.grid.grid.forEach((lista,numer,main) => {
                lista.forEach((element,index,array) => {
                    if (this.y+1 === element.y && element.x === this.x && (element.type === "WATER" || element.type === "ICE")) {
                        main[numer-1][index] = new Tile(index+1, numer, "WATER")
                        array[index] = this; 
                        this.y = this.y+1; 
                        if (element.type === "ICE") {
                            console.log("Statek napotkał lądolód, przedarł się przez niego");
                        }
                    } 
                    if (this.y+1 === element.y && element.x === this.x && element.type === "LAND") {
                        this.turn("P")
                    }
                });
            });
        }
        if (this.direction === "E") {
            if (this.x === (this.grid)[0].length) {
                console.log("UPS! Koniec mapy.");
            }
            this.grid.grid.forEach((lista,numer) => {
                lista.forEach((element,index,array) => {
                    if (this.y === element.y && element.x === this.x+1 && (element.type === "WATER" || element.type === "ICE")) {
                        array[index] = this;
                        array[index-1] = new Tile(index, numer+1, "WATER")
                        this.x = this.x+1;
                        if (element.type === "ICE") {
                            console.log("Statek napotkał lądolód, przedarł się przez niego");
                        }
                    }
                    if (this.y === element.y && element.x === this.x+1 && element.type === "LAND") {
                        this.turn("P")
                    }
                });
            });
        }
        if (this.direction === "W") {
            if (this.x === 1) {
                console.log("UPS! Koniec mapy.");
            }
            this.grid.grid.forEach((lista,numer) => {
                lista.forEach((element,index,array) => {
                    if (this.y === element.y && element.x === this.x-1 && (element.type === "WATER" || element.type === "ICE")) {
                        array[index] = this;
                        array[index+1] = new Tile(index+2, numer+1, "WATER")
                        this.x = this.x-1;
                        if (element.type === "ICE") {
                            console.log("Statek napotkał lądolód, przedarł się przez niego");
                        }
                    }
                    if (this.y === element.y && element.x === this.x-1 && element.type === "LAND") {
                        this.turn("P")
                    }   
                });
            });
        }
    }
}

const grid = new Grid()
// grid.generate(5,7)

const predefTiles = [
    new Tile(1, 2, "LAND"),
    new Tile(2, 1, "WATER"),
    new Tile(2, 2, "WATER"),
    new Tile(3, 2, "WATER"),
    new Tile(2, 3, "WATER"),
    new Tile(2, 4, "WATER"),
    new Tile(5, 5, "ICE")
];
grid.generatePredefined(6,5, predefTiles)
// grid.getTile(2,2).getTileInfo()
const ship = new Ship(4, 4, "N", grid);
const ship2 = new Ship(1, 2, "N", grid); 
const ship3 = new Ship(2, 2, "E", grid);
// // grid.printGrid()
// ship3.getShipInfo()
// ship3.turn("P")
// // grid.printGrid()
ship3.turn("P")
// // ship3.getShipInfo()
ship3.sail()
ship3.sail()
// ship3.getShipInfo()
const icebreaker = new IcebreakerShip(3, 5, grid);
icebreaker.sail(); // Statek napotkał lądolód, przedarł się przez niego
icebreaker.sail()
// console.log(icebreaker.getShipInfo()); // "N", 3,6
grid.printGrid()