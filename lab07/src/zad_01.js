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
const res3a = _.chain(lp3).sortBy((x) => x.change).dropRight(15).value();
// console.log(res3a);

//4
const help4 = _.find(lp3, (x) => x.place === 1);
const res4 = _.omit(help4, ['place', 'change']);
// console.log(res4);

//5
const res5 = (arr) => {
    if (_.every(arr, (x) => _.isInteger(x))) {
        _.forEach(arr, (x) => {
            console.log(lp3[x]);
        });
    }
    else {
        console.log(false);
    }
};
res5([1, 5, 7, 15, 0]);