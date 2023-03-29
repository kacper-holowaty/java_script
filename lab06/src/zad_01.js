const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

function oblicz(arr,zmienna) {
    const res = arr.reduce((akum,elem) => akum + elem[zmienna],0)
    return res/arr.length;    
}
console.log(oblicz(arr,'x'));
console.log(oblicz(arr,'y'));