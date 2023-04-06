const { lp3 } = require('./toplist');
const _ = require('lodash');

//1
const res1 = _.filter(lp3, (x) => x.author === 'Queen');
// console.log(res1);

//2
const res2 = _.filter(lp3, (x) => x.author === 'Pink Floyd' && x.change >= 10);
// console.log(res2);

//3
function res3(arr, n) {
    const posortowana = _.sortBy(arr, (x) => x.change);
    const usunN = _.dropRight(posortowana, n);
    return usunN;
}
// console.log(res3(lp3, 14));

//albo
const doUsuniecia = 15;
const res3a = _.chain(lp3).sortBy((x) => x.change).dropRight(doUsuniecia).value();
// console.log(res3a);

//4
const help4 = _.find(lp3, (x) => x.place === 1);
const res4 = _.omit(help4, ['place', 'change']);
// console.log(res4);

//5
const res5 = (arr) => {
    if (_.every(arr, (x) => _.isInteger(x))) {
        _.forEach(arr, (x) => {
            console.log(_.nth(lp3, x));
        });
    }
    else {
        console.log("Nie wszystkie elementy są typu integer!");
    }
};
// res5([1, 5, 7, 15, 0]);

//6
const res6 = (n, min, max) => {
    for (let i = 0; i < n; i++) {
        console.log(lp3[_.random(min,max)-1]);
    }
}
// res6(4,1,7)

//7
const res7 = () => _.chain(lp3).take(10).forEach((n,index) => (_.delay(() => console.log(n), 2000 * (index+1)))).value();
// res7();

//8
const res8 = _.filter(lp3, (x) => x.change < 0);
// console.log(res8);

//9
const res9 = _.reduce(lp3, (akum, elem) => {
    return {...akum,[elem.song]: _.omit(elem, ['song'])};
}, [])
// console.log(res9);

//10
const res10 = _.reduce(lp3, (akum, elem) => {
    if (akum[elem.author] === undefined) akum[elem.author] = []
    akum[elem.author].push(_.omit(elem, ['author', 'change']))
    return akum;
},[])
// console.log(res10);

//11
const res11 = _.countBy(lp3, (x) => x.author);
// console.log(res11);

//12
const maxSpadek = _.minBy(lp3, (x) => x.change)
const maxWzrost = _.maxBy(lp3, (x) => x.change)
// console.log(`Największy spadek: ${JSON.stringify(maxSpadek)}, największy wzrost: ${JSON.stringify(maxWzrost)}`);
