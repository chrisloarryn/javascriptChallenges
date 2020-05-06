const dummy = [[1, 2, 3, 4, 5], 4]

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let arr = a;
    for (let i in arr){
        if (i < d) {
            arr.push(arr.shift())
            // console.log(i)
        }
    }
    return arr
    // const arr = a.unshift(a.pop())

    // const repeated = arr.repeat(d)
    //console.log(repeated)
}

console.log(rotLeft(dummy[0], dummy[1]))
