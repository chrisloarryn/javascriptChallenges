const moment = require('moment')

const momentDate = new Date(
  'Mon Mar 15 2021 14:53:04 GMT-0300 (Chile Summer Time)',
)

console.log(momentDate.toString())

const lodash = require('lodash')

const servicePickOnNewAndDelete = [
  '_id',
  'service',
  'status',
  'realizationDate',
  'startDatePrivilege',
  'endDatePrivilege',
  'document',
]

function getKeyValue(object) {
  if (object)
    return lodash.keysIn(object).map(key => {
      const dateElements = [
        'realizationDate',
        'startDatePrivilege',
        'endDatePrivilege',
      ]
      if (dateElements.includes(key)) {
        return {
          name: key,
          value: object[key] ? new Date(object[key]) : object[key],
        }
      }
      return {
        name: key,
        value: object[key],
      }
    })
}

console.log(
  getKeyValue({
    name: 'dog',
    gender: 'none',
    age: 1,
    realizationDate: null,
  }),
)
