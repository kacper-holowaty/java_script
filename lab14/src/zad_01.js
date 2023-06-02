const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

const asyncSort = (dim) => {
    const arr = []; 
    for (let i = 0; i < dim; i++) {
      getNum(x => {
        arr.push(x)
        if (arr.length === dim) {
          arr.sort((a,b) => b - a)
          console.log(arr);
        }
      })
    } 
};
asyncSort(5);
