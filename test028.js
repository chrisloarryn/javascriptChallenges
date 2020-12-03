const clRut = require('@validatecl/rut')
let arr1 = [[1, 2, 3], [2, 3, 4], 3, 4] // NaN, NaN, 6, 8

arr1.map(x => [x * 2])
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2])
// [2, 4, 6, 8]

// only one level is flattened
const arrFlatMap = arr1.flatMap(x => [[x * 2]])
console.log(arrFlatMap.flat(1))
// [[2], [4], [6], [8]]

const roles = ['ADMIN', 'USER', 'SUPERVISOR', 'SAM']

console.log('User types accepted are:', typeof roles.join(','))
console.log(roles)
const rut = '273595635'
const isValid = clRut.validate(rut)
if (isValid) {
  const validate = clRut.digits(rut) // 27359563
  const validate2 = clRut.verifier(rut) // 5
  console.log('valid', isValid) // valid true
  console.log(validate) // 27359563
  console.log(validate2) // 5
  console.log('valid rut:', clRut.format(rut, true)) // valid rut: 27.359.563-5
} else console.log('rut not valid')
