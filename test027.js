// Nuestro gatito regalon salió a caminar por un jardín vecino. Hay muchos arbustos en el jardín y cada arbustos tiene una letra del alfabeto escrito. Mientras
// nuestro gatito caminaba, notó que todos los arbustos que contienen vocales no están en buen estado. Decidió cuidarlos. Entonces, te pidió que le contaras el
// recuento de tales arbustos en el jardín.
// Nota: Las siguientes letras son vocales: 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o' y 'u'.

// Entrada:
// - Los datos deben ser extraídos de un archivo
// - La primera línea consiste en un número entero X que indica el número de casos de prueba. (X e N / X >= 4)
// - Cada caso de prueba consta de solo una cadena, cada carácter de la cadena que indica el alfabeto (puede estar en minúsculas o mayúsculas) es un arbusto
//  en el jardín.

// Salida:
// Para cada caso de prueba, imprima el recuento en una nueva línea.

// Datos a considerar:
// 5 <= Largo de cadena < 50
// La cadena tiene que contener al menos una minúscula y una mayúscula
// El nro de casos de prueba tiene que ser al menos 4

// --------
// Ejemplo
// --------
// Entrada:
// 2
// nEBBZLosnm
// JHkIsnZtTL

// Salida:
// 2
// 1

const logThis = console.log
const fs = require('fs')
const possible =
  'AEIOUaeiouABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const vowels = 'AEIOUaeiou'

const readData = () => {
  return fs.readFileSync('./dataCat.txt', 'utf8')
}

// function to read data from file
const callingFunction = async () => {
  const manyPromises = await Promise.all([readData()])
  return manyPromises[0]
}

// function to make a random string from a (length, charSet)
const randomString = (len, charSet) => {
  charSet =
    charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var randomString = ''
  for (var i = 0; i < len; i++) {
    if (len < 4) return 'n'
    if (len > 50) return 'n'
    var randomPoz = Math.floor(Math.random() * charSet.length)
    randomString += charSet.substring(randomPoz, randomPoz + 1)
  }
  return randomString
}

// function to count vowels into given string
const countVowels = data =>
  data
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char)).length

// function to handle catWalking vowels founded
const handleCatWalking = async () => {
  const newData = (await callingFunction())
    .replace(/[,.]/g, ' ')
    .split(' ')
    .map(number => parseInt(number))
  // logThis(newData)
  for (const item of newData) {
    const str = randomString(item, possible)
    const countOfVowels = countVowels(str)

    logThis(str, countOfVowels)
  }
  return ''
}

// handler
handleCatWalking()
