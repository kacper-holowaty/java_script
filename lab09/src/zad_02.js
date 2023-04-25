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
        console.log(`x: ${this.x} y: ${this.y} type: ${this.type}`);
    }
} 
class Grid {
    constructor(height = null, width = null, grid = null, ships = null) {

    }
    generate(height, width) {
        this.height = height
        this.width = width
        const types = ["LAND", "WATER", "ICE"];
        for (let i = 1; i <= height; i++) {
            for (let j = 1; j <= width; j++) {
                const itemType = types[Math.floor(Math.random() * types.length)];
                new Tile(j,i,itemType).getTileInfo()
            }
        }
    }
}
// class Ship {
//     constructor()
// }
const grid = new Grid()
grid.generate(10,10)
