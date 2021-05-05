exports.fizzBuzz = num => {
  if (typeof num !== 'number') {
    return 'Error: arguments must be number type'
  }
  const divisible = (divisor, num) => num % divisor === 0
  if (num === 0) return num
  if (divisible(3, num) && divisible(5, num)) return 'fizzbuzz'
  if (divisible(3, num)) return 'fizz'
  if (divisible(5, num)) return 'buzz'
  return num
}

exports.print = num => {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${this.fizzBuzz(i)}`)
  }
}

this.print(16)
