/*
Given the size of the sides of an array, you are asked to mark with an x ​​the elements of the diagonals and with a _ all the others

input: int side
output: array diagonals
 
 diagonals(3)
 
 [['x','_','x'],
  ['_','x','_'],
  ['x','_','x']]

*/
// const diagonals = sides => {
//     var side = [];
//     for(let i = 2; i < sides+2; i++) side.push(i%2===0 ? ['x','_','x'] : ['_','x','_'])
//     return side;
// }

const range = (start, end) => {
    const array = [];
    for (let i = start; i < end; i++) array.push(i)
    return array
}

function diagonals(side) {
    const ar = range(0, side)
    return ar.map(i => ar.map(e => (e === i || side - e === i ? 'x' : '_')))
}

console.log("5x5")
diagonals(5).forEach(x => console.log(x))

console.log("11x11")
diagonals(11).forEach(x => console.log(x))

console.log("15x15")
diagonals(15).forEach(x => console.log(x))
