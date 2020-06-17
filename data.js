// 1. Composite function
// Write a function called "rokket" which produces the following output when called:
const rokketFirst = x => y => z => x * y * z

console.log(rokketFirst(2)(5)(3)) // this outputs 30
console.log(rokketFirst(4)(2)(2)) // this outputs 16
console.log(rokketFirst(8)(2)(1)) // this also outputs 16

// This function must work for any three integer numbers.
// 2. Longest string
// Write a function called "rokket" which receives an array with several strings. It must outputthe longest
// (characterlength) string in the array.
// Example:

const rokketSecond = list => list.reduce((a, b) => a.length > b.length ? a : b)

const list = ['best', 'company', 'ever']
console.log(rokketSecond(list)) // this outputs 'company'

// 3. String repetition
// Write a function called "rokket" which receives a string A and an integer N and returns a new string with
// A repeated N times.
// Example:

const rokketThird = (W, N) => W.repeat(N)

console.log(rokketThird('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokketThird('abc', 2)) // this outputs 'abcabc'

// 4. Only last names
// Write a function called "rokket" which receives a list of names from a contact book. Each name is an object
// consisting of a first name and last name. Return a listthat shows only the last names.
// Example:

const contacts = [
  { firstName: 'Juanito', lastName: 'Rokket' },
  { firstName: 'James', lastName: 'Bond' },
  { firstName: 'Harry', lastName: 'Potter' }
]

const rokketFourth = contacts => contacts.map(c => c.lastName)
console.log(rokketFourth(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']

// 5. Unique numbers
// Write a function called "rokket" which receives two number arrays of any size. Return a list containing the
// intersection ofthe two arrays (all unique numbers in both arrays).
// Example:

const rokketFifth = (A1, A2) => [...new Set([...A1 , ...A2])]

console.log(rokketFifth([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokketFifth([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
