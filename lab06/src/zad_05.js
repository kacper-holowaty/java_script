const series = require('./series.js').series;

const miniseries = series.reduce((akum,elem) => {
    if (elem.startYear === elem.endYear) {
        return [...akum,{"name": elem.name, "type": elem.type, "year": elem.startYear}]
    }
    else {
        return [...akum]
    }
},[]).reduce((acc,item) => {
    const naString = item.type.reduce((akum,elem) => {
       return `${akum}, ${elem}`
    },'')
    return [...acc,{"name": item.name, "type": naString.slice(2), "year": item.year}] 
},[]).sort((a,b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (b.name > a.name) {
        return -1;
    }
    else {
        return 0;
    }
})
console.log("Część pierwsza zadania - output miniseries:\n");
console.log(miniseries);
console.log("\n\n");
console.log("Część druga zadania - output series:\n");


function sortowanie(arr) {
    return arr.sort((a,b) => {
        if (a.startYear > b.startYear) {
            return 1;
        }
        if (b.startYear > a.startYear) {
            return -1;
        }
        else {
            if (a.endYear === null || a.endYear < b.endYear) {
                return -1;
            }
            if (a.endYear > b.endYear) {
                return 1;
            }
            else {
                return 0;
            }
        }
    })
}

const sortedSeries = sortowanie(series);
const seriesWithoutMiniseries = sortedSeries.filter(x => x.startYear !== x.endYear).reduce((akum,elem) => {
    const {id, name, startYear, seasons} = elem;
    const naString = elem.type.reduce((acc,item) => {
        return `${acc}, ${item}`
    },'')
    if (elem.endYear === null) {
        // const {id, name, startYear, seasons} = elem;
        return [...akum,{id,name,startYear, "type": naString.slice(2), seasons}]
    }
    else {
        return [...akum,{id,name,startYear,"endYear": elem.endYear, "type": naString.slice(2), seasons}]
    }
},[])

const seriesBefore2010 = seriesWithoutMiniseries.filter(x => x.startYear < 2010)
const series2010_2020 = seriesWithoutMiniseries.filter(x => x.startYear >= 2010 && x.startYear < 2020)
const seriesAfter2020 = seriesWithoutMiniseries.filter(x => x.startYear >= 2020)

const resArray = [];
resArray.push(seriesBefore2010,series2010_2020,seriesAfter2020)

console.log(resArray);
