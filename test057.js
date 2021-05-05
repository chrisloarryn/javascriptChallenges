const arr = ['Pedro']

function padArrayWithDefault(arr, n) {
  const arrayModified = arr
  while (arr.length < n) {
    arrayModified.push('')
  }
  return arrayModified
}
const filled = padArrayWithDefault(arr, 2)
console.log('====================================')
console.log(filled)
console.log('====================================')
