'use strict';

const arr = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
]

const res = arr.reduce((akum,elem) => {
    return [...akum,{[elem.id]:elem}]    
},[])
console.log(res);