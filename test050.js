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

const newItems1 = [
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
    status: 'PENDING',
    realizationDate: '2021-03-11T17:53:04.350Z',
    startDatePrivilege: '2021-03-11T17:53:04.350Z',
    endDatePrivilege: '2021-03-11T17:53:04.350Z',
    document: 'undefined',
  },
]

const newItems2 = [
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
    status: 'PENDINGOS',
    realizationDate: '2021-03-11T17:53:04.350Z',
    startDatePrivilege: '2021-03-11T17:53:04.350Z',
    endDatePrivilege: '2021-03-11T17:53:04.350Z',
    document: 'undefined',
  },
]

const oldItemsArray = lodash.map(newItems1, '_id')
const newItemsArray = lodash.map(newItems2, '_id')
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
if (lodash.difference(newItems2, newItems1)) {
  const itemsToAdd = lodash.difference(newItemsArray, oldItemsArray)
  const findElement = itemsToAdd
    .map(item => ({
      ...newItems.find(el => el._id === item),
    }))
    .map(el => lodash.pick(el, servicePickOnNewAndDelete))
  console.log('commit add', findElement)
}

// modified items
if (
  lodash.difference(newItems1, newItems2) &&
  !lodash.isEqual(newItems1, newItems2)
) {
  const item = oldItems && oldItems.length > 0 ? oldItems[0] : undefined
  if (!lodash.isEmpty(item)) {
    const pickedItem = lodash.omit(item, serviceOmitInModify)
    const keys = lodash.keysIn(pickedItem)
    const arrayToMerge = keys.map(el => {
      // keys in object to find differences by each item
      const [item] = lodash.differenceBy(newItems, oldItems, el)
      return item
    })
    var merged = lodash.uniqBy(arrayToMerge, '_id')
    var values = lodash.values(merged)
    // console.log(values)
    // const mergedArray = lodash.merge() // .filter(el => el)
    /*mergedArray.forEach(async el => {
      console.log(el)
       await addHistoryEntry(conn, {
        event: HistoryEventsEnum.ServiceModified,
        name: HistoryEntitiesEnum.Services,
        _id: professional._id,
        createdBy: user._id,
        meta: meta as HistoryMeta[],
        otherId: new Types.ObjectId(el._id),
      }) 
    })*/
  }
}

// deleted
if (lodash.difference(newItems2, newItems1)) {
  const itemsToDelete = lodash.difference(oldItemsArray, newItemsArray)
  console.log(itemsToDelete)
  const findElement = itemsToDelete.map(item => ({
    ...newItems1.find(el => el._id === item),
  }))
  // console.log(findElement)
  // .map(el => lodash.pick(el, servicePickOnNewAndDelete))
  console.log('commit delete', findElement)
}
