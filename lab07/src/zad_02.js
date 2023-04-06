const _ = require('lodash');

const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
};
  
const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
};

function detectChanges(original, modified) {
    return _.differenceWith(_.entries(modified), _.entries(original), _.isEqual)
}
console.log(detectChanges(object1, object2));

const object3 = {
    value: { field: "old value" },
    name: 'test'
  }
  
  const object4 = {
    value: { field: "new value" },
    name: 'test'
  }
  
  console.log(detectChanges(object3, object4));