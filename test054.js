let x = 22 + 7 + 'b' + 5 + 4
let d = '1' + 1 + 1 + 1

setTimeout(function () {
  console.log('joe')
}, 8000)

setTimeout(function () {
  console.log('jimmy')
}, 0)

getDataFromDatabase(function (err, data) {
  console.log('lin')
  setTimeout(function () {
    console.log('emmy')
  }, 7000)
})

console.log('Immy')
