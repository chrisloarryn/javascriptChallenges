var myArray = [13, 2, 4, 35, 1]
// uniq = [...new Set(myArray)]
const res = [...new Set(myArray)].sort((a, b) => a - b).pop()

var myArray2 = [1, 3, 2, 0, 7, 8, 1, 3, 0, 6, 7, 1]
// const res2 = myArray2.splice(1)
// myArray2.findIndex(0)
const range = (start, end) => {
  const array = []
  for (let i = start; i < end; i++) array.push(i)

  return array
}

function diagonals(side) {
  const ar = range(0, side)
  return ar.map(i => ar.map(e => (e === i || side - e === i ? 'x' : '_')))
}
// console.log('5x5')
// diagonals(5).forEach(x => console.log(x))

var myArra = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1]
const n = [1, 2, 3, 4, 5]
  .map((m, i, a) => {
    return myArra.filter(e => e === m)
  })
  .map(r => {
    const val = r[0] ? r[0] : 4
    /* console.log(
  `${val}: ${'*'.repeat(r.reduce((total, amount) => total + amount, 0))}`,
) */

    // console.log()
  })

// console.log(n)

var myArrasy = [1, 3, 4, 2, 7, 0]

const dt = myArrasy
  .sort((a, b) => a - b)
  .map((element, i, arr) => {
    return arr.map(r => {
      if (element + r === 10) {
        return [element, r]
      }
    })
  })
  .flat()
  .filter(e => e)[0]
// console.log(`${dt}`.replace(',', ' '))

var myArrray = [1, 2, 2, 4, 5, 6, 7, 8, 8, 8]

const longer = myArrray.sort((a, b) => b - a)

var countOccurrences = () => {
  let counted = myArrray.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++
    } else {
      acc[curr] = 1
    }

    return acc
  }, {})

  let mode = Object.keys(counted).reduce((a, b) => {
    return counted[a] > counted[b]
      ? { Longest: counted[`${a}`], Number: parseInt(a) }
      : { Longest: counted[`${b}`], Number: parseInt(b) }
  })

  return mode
}

console.log(
  Object.keys(countOccurrences()).map(r => {
    console.log(`${r}`)
  }),
)
