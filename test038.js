const { Temporal } = require('proposal-temporal')

const log = (values, type = 'log') => console[type](values)
const date = new Date()

const month = (date.getMonth() + 1).toString()
const day = date.getDate().toString()
const year = date.getFullYear().toString()

const verifiedMonth = month.padStart(2, '0')
const verifiedDay = day.padStart(2, '0')
const date1 = Temporal.now.plainDateISO() // Gets the current date
date1.toString() // returns the date in ISO 8601 date format
log(date1.toString())
log(verifiedMonth)
log(verifiedDay)
log(year)

log(`${verifiedDay}-${verifiedMonth}-${year}`, 'warn')
