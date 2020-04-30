
const vowels = ["a", "e", "i", "o", "u"]
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let letter of s) {
        if (vowels.includes(letter.toLowerCase())) {
            console.log(letter.toLowerCase())
        }
    }
    for (let letter of s) {
        if (!vowels.includes(letter.toLowerCase())) {
            console.log(letter.toLowerCase())
        }
    }

}
console.log(vowelsAndConsonants('javascriptloops'))
