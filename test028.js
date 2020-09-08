let arr1 = [[1, 2, 3], [2 ,3, 4], 3, 4]; // NaN, NaN, 6, 8

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
const arrFlatMap = arr1.flatMap(x => [[x * 2]]);
console.log(arrFlatMap.flat(1))
// [[2], [4], [6], [8]]