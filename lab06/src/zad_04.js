const books = require('./books.js').booksArray;
        
const result = books.reduce((akum,elem) => {
    const {title, author} = elem;
    if (typeof elem.genre === "object") {
        elem.genre.map((genre) => 
        akum[genre] ? akum[genre].push({title,author}) : 
        akum[genre] = [{title,author}])
    }
    else {
        akum[elem.genre] ? akum[elem.genre].push({title,author}) : 
        akum[elem.genre] = [{title,author}]
    }
    return akum;
},{}) 
        
console.dir(result, { depth: null });