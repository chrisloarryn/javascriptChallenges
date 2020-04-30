/**
 * Regular expression to test a word if starts or ends with vowel
 * @type {RegExp}
 */
const re = /\b([aeiou])[a-z]+\1\b/i;
const textToTest = 'abalas'

/*
regexp
 */
const regExpValidator = (re) => {
    return re.test(textToTest);
}

console.log(regExpValidator((re)))
