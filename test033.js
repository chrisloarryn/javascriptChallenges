const log = console.log

const reverseString = str => {
  return str ? reverseString(str.substr(1)) + str[0] : str
}

const sumArray = arr => {
  return arr ? sumArray(arr.pop()) : arr
}

log(reverseString('hello world!'))
function countDownFrom(number) {
  if (number === 0) {
    return
  }

  console.log(number)
  countDownFrom(number - 1)
}

countDownFrom(5)
// => !dlrow olleh

console.log('another countdown')

// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number)

  // decrease the number value
  const newNumber = number - 1

  // base case
  if (newNumber > 0) {
    countDown(newNumber)
  }
}

countDown(4)

console.log('sss', new Date().toISOString())

const moment = require('moment')
const tim = require('date-fns-tz')
const date = new Date()
const nyTimeZone = 'America/Santiago'
const nyDate = tim.utcToZonedTime(date, nyTimeZone)
const formatToString = date => {
  return moment.utc(date).format()
}

console.log(formatToString(new Date()))
console.log(nyDate)
