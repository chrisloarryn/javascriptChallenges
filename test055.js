const arr1 = [3, 1, 2, 2, 4],
  arr2 = [8, 5, 5, 5, 5, 1, 1, 1, 4, 4]

function myCodeEx(items) {
  let map = {}
  for (let i = 0; i < items.length; i++) {
    map[items[i]] = (map[items[i]] || 0) + 1
  }
  return items.sort((a, b) => map[a] - map[b] || a - b)
}

const x = myCodeEx(arr1)
// console.log(x)

// 1st Mar 1974 -> 1974-03-01
// 22nd Jan 2013 -> 2013-01-22

function processDates(dates) {
  return dates.map(date => {
    const cleanedDate = date
      .replace('st', '')
      .replace('nd', '')
      .replace('rd', '')
      .replace('th', '')
    const jsDate = new Date(cleanedDate)
    const year = jsDate.getFullYear(),
      month = `${jsDate.getMonth() + 1}`.padStart(2, '0'),
      day = `${jsDate.getDate()}`.padStart(2, '0')
    return `${year}-${month}-${day}`
  })
}

const dates = ['1st Mar 1974', '22nd Jan 2013']

console.log(processDates(dates))
