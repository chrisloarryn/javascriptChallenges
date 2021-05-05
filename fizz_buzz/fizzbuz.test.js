const { fizzBuzz } = require('./fizzbuz')

describe('Fizz_Buzz', () => {
  test('should print an error message if the argument is not number type', () => {
    const expected = 'Error: arguments must be number type',
      result = fizzBuzz('16')
    expect(expected).toBe(result)
  })
  test('should print 1 if same is received', () => {
    const expected = 1,
      result = fizzBuzz(1)
    expect(expected).toBe(result)
  })
  test(`should print "fizz" if receive 3`, () => {
    const expected = 'fizz',
      result = fizzBuzz(3)
    expect(expected).toBe(result)
  })
  test(`should print "fizz" if receive 3 multiple`, () => {
    const expected = 'fizz',
      result = fizzBuzz(6)
    expect(expected).toBe(result)
  })
  test(`should print "buzz" if receive 5`, () => {
    const expected = 'buzz',
      result = fizzBuzz(5)
    expect(expected).toBe(result)
  })
  test(`should print "buzz" if receive 5 multiple`, () => {
    const expected = 'buzz',
      result = fizzBuzz(10)
    expect(expected).toBe(result)
  })
  test(`should print "fizzbuzz" if receive 3 and 5 multiple`, () => {
    const expected = 'fizzbuzz',
      result = fizzBuzz(15)
    expect(expected).toBe(result)
  })
})
