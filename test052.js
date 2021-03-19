const lodash = require('lodash')

const firstTime = {
  department: '604f4ada3cb009c7b23cef07',
  status: 'PENDING',
  createdAt: '2021-03-11T17:53:04.350Z', // '2021-03-11T17:53:04.350Z'
  updatedAt: '2021-03-11T17:53:04.350Z',
}

const newItem = {
  department: '604f4ada3cb009c7b23cef07',
  // status: 'FULL_FILLED',
  status: 'PENDING',
  // realizationDate: '2021-03-11T17:53:04.350Z', // '2021-03-11T17:53:04.350Z'
  // startDatePrivilege: undefined,
  //endDatePrivilege: undefined,
  // document: undefined,
  createdAt: '2021-03-11T17:53:04.350Z', // '2021-03-11T17:53:04.350Z'
  updatedAt: '2021-03-11T17:53:04.350Z',
}

const PROPERTIES_TO_PICK = [
  'department',
  'status',
  'realizationDate',
  'document',
  'startDatePrivilege',
  'endDatePrivilege',
  'createdAt',
]

const serviceOmitInMeta = ['createdAt', 'updatedAt']

const cleanedItemOld = lodash.pick(firstTime, PROPERTIES_TO_PICK)
const cleanedItemNew = lodash.pick(newItem, PROPERTIES_TO_PICK)
const keysOld = lodash.keysIn(cleanedItemOld)

const objectDiff = (a, b) =>
  lodash.fromPairs(
    lodash.differenceWith(lodash.toPairs(a), lodash.toPairs(b), lodash.isEqual),
  )

const differenceBetween = objectDiff(cleanedItemNew, cleanedItemOld)

// news
if (!keysOld.includes('department')) {
  console.log('will add')
  console.log(';;')
}

// modified items
if (
  keysOld.includes('department') &&
  !lodash.isEmpty(newItem.department) &&
  lodash.keysIn(differenceBetween).length > 0
) {
  console.log('will modify')
  console.log(';;')
}

// deleted
if (keysOld.includes('department') && lodash.isEmpty(newItem.department)) {
  console.log('will delete')
  console.log(';;')
}
