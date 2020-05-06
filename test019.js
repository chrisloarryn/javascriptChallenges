console.log("2D Array Hour Glass");


const hourGlassSum = (array) => {
    let sum;
    for (let i = 0; i <= 3; i ++) {
        for (let j = 0; j <= 3; j ++) {
            let top    = array[i][j] + array[i][j+1] + array[i][j+2],
                middle = array[i+1][j+1],
                bottom = array[i+2][j] + array[i+2][j+1] + array[i+2][j+2],
                total  = top + middle + bottom;
            if (total > sum || sum === undefined) {
                sum = total;
            }
        };

    };
    return sum;
};


const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];


console.log(hourGlassSum(arr));




const negArr = [
    [10, -1, -1, 0, 0, 0],
    [ 0, -1,  0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [ 0,  0, -2,-4,-4, 0],
    [ 0,  0,  0,-2, 0, 0],
    [ 0,  0, -1,-2,-4, 0]
];

console.log(hourGlassSum(negArr));



const anotherArray = [
    [-9, -9, -9,  1, 1, 1],
    [ 0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [ 0,  0,  8,  6, 6, 0],
    [ 0,  0,  0, -2, 0, 0],
    [ 0,  0,  1,  2, 4, 0]
];

console.log(hourGlassSum(anotherArray));
