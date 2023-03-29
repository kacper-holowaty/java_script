const ships = require('./ships.js').shipsArray;

const helper = ships.reduce((akum,elem) => {
    const {model,manufacturer} = elem;
    elem.crew.map((character) => 
        akum[character] ? 
        akum[character].push({model,manufacturer}) : 
        akum[character] = [{model,manufacturer}]
    )
    return akum;
},{});
const klucze = Object.keys(helper)
const result = klucze.reduce((akum,elem) => {
    const reszta = helper[elem];
    const edytuj = reszta.reduce((acc,item,index) => {
        return `${acc}${index+1}. ${item.model}, manufacturer: ${item.manufacturer}\n`
    },'')
    return `${akum}${elem}\n${edytuj}\n`
},'')
console.log(result);