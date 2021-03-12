const ucWords = word => {
  if (!word) return word
  return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`
}

const eachWord = text => {
  if (!text) return ''

  // Removes the leading and trailing white space and line terminator characters from a string
  let propText = text.trim()

  // if (propText.includes('-')) propText = propText.split('-').join(' ');
  if (propText.includes('_')) propText = propText.split('_').join(' ')

  // If has not second name return text
  if (!propText.includes(' ')) return ucWords(text)

  // Make an array with all words
  const words = propText.split(' ')

  // Return each word in required format
  return words
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .filter(str => str.length > 0)
    .join(' ')
}

const text = 'asdasd '
const textNull = null
const textUndefined = undefined

console.log(eachWord(textUndefined))
