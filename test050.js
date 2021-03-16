const lodash = require('lodash')

const oldItems = [
  {
    _id: '604f4ada3cb009c7b23cef05',
    service: '60116105db99454264a956f7',
    status: 'PENDING',
    realizationDate: undefined, // '2021-03-11T17:53:04.350Z'
    startDatePrivilege: undefined,
    endDatePrivilege: undefined,
    document: undefined,
  },
  {
    _id: '604f4ada3cb009c7b23cef06',
    service: '60116105db99454264a956fc',
    status: 'PENDING',
    realizationDate: undefined,
    startDatePrivilege: undefined,
    endDatePrivilege: undefined,
    document: undefined,
  },
]

const newItems = [
  {
    _id: '604f4ada3cb009c7b23cef07',
    service: '60116105db99454264a956f7',
    status: 'PENDING',
    realizationDate: undefined, // '2021-03-11T17:53:04.350Z'
    startDatePrivilege: undefined,
    endDatePrivilege: undefined,
    document: undefined,
  },
  {
    _id: '604f4ada3cb009c7b23cef06',
    service: '60116105db99454264a956fc',
    status: 'PENDINGO',
    realizationDate: '2021-03-11T17:53:04.350Z',
    startDatePrivilege: '2021-03-11T17:53:04.350Z',
    endDatePrivilege: '2021-03-11T17:53:04.350Z',
    document: 'undefined',
  },
]

const oldItemsArray = lodash.map(oldItems, '_id')
const newItemsArray = lodash.map(newItems, '_id')
const servicePickOnNewAndDelete = [
  '_id',
  'service',
  'status',
  'realizationDate',
  'startDatePrivilege',
  'endDatePrivilege',
  'document',
]
const serviceOmitInModify = [
  'createdAt',
  'updatedAt',
  '_id',
  'service',
  'department',
]

// news
if (lodash.difference(newItemsArray, oldItemsArray)) {
  const itemsToAdd = lodash.difference(newItemsArray, oldItemsArray)
  const findElement = itemsToAdd
    .map(item => ({
      ...newItems.find(el => el._id === item),
    }))
    .map(el => lodash.pick(el, servicePickOnNewAndDelete))
  console.log('commit add', findElement)
}

// modified
if (lodash.difference(oldItems, newItems)) {
  const item = oldItems && oldItems.length > 0 ? oldItems[0] : undefined

  if (!lodash.isEmpty(item)) {
    const pickedItem = lodash.omit(item, serviceOmitInModify)
    const keys = lodash.keysIn(pickedItem)
    const arrayToMerge = keys.map(el => {
      // keys in object to find differences by each item
      const [item] = lodash.differenceBy(newItems, oldItems, el)
      return item
    })
    const mergedArray = lodash.merge(arrayToMerge)
    console.log('modified', mergedArray)
    // lodash.uniqBy(mergedArray, '_id')
  }
}

// deleted
if (lodash.difference(newItemsArray, oldItemsArray)) {
  const itemsToDelete = lodash.difference(oldItemsArray, newItemsArray)
  const findElement = itemsToDelete
    .map(item => ({
      ...oldItems.find(el => el._id === item),
    }))
    .map(el => lodash.pick(el, servicePickOnNewAndDelete))
  console.log('commit delete', findElement)
}
