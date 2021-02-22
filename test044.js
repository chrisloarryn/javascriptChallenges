const { valueFromAST } = require('graphql')
const lodash = require('lodash')

const input = {
  status: 'REJECTED',
  detailTerm: {
    endedAt: '2021-02-11T15:38:01.955Z',
    comment: 'fgfgfgfgf',
    reason: 'TWO_REASON',
  },
}

const input2 = {
  firstName: 'Cristobal',
  firstSurname: 'Contreras',
  secondSurname: 'Orellana',
  rut: '18.979.569-6',
  avatar: null,
  status: 'SUSPENDED',
  code: 100103,
  birthday: null,
  languages: [],
  gender: 'OTHER',
  maritalStatus: 'NOT_SPECIFIED',
  phone: null,
  phoneCode: '+56',
  cellPhone: null,
  cellPhoneCode: '+56',
  email: 'chrisloarryn@gmail.com',
  corporativeEmail: null,
  address: { detail: null },
  createdAt: '2020-02-18T19:10:03.215Z',
  services: [],
  centers: [],
  subDepartment: '602ada7d4bafd31b207bcb8f',
  workPlaces: [],
  positions: [],
  resuscitationCourses: [],
  infectionCourses: [],
  sedationCourses: [],
  extinguisherCourses: [],
  facilitySafetyCourses: [],
  otherDocuments: [],
  detailTerm: {
    endedAt: '2021-02-18T19:43:09.078Z',
    comment: 'fgfg',
    reason: 'ONE_REASON',
  },
}

const value = Object.keys(input2).map(key => {
  const value = typeof input2[key] === 'string' ? input2[key] : key
  const keyyyys =
    typeof input2[key] === 'object' && typeof key === 'string' && !!key && key
  // console.log(keyyyys)
  const values =
    typeof input2[key] === 'object' &&
    typeof key === 'string' &&
    key === 'detailTerm'
      ? [] /*getKeyValue(input2[key])
      :  : key === 'address'
      ? getKeyValue(input2[key])
      : key === 'developments'
      ? getKeyValue(input2[key])
      : key === 'sedationCourses'
      ? getKeyValue(input2[key])
      : key === 'services'
      ? getKeyValue(input2[key])
      : key === 'subDepartment'
      ? getKeyValue(input2[key])
      : key === 'workPlaces'
      ? getKeyValue(input2[key])
      : key === 'resuscitationCourses'
      ? getKeyValue(input2[key])
      : key === 'department'
      ? getKeyValue(input2[key]) */
      : []
  return { name: `${key.trim()}`, value, values }
})

const input3 = {
  _id: '602fdc06e0f0d4000842ec82',
  input: {
    code: 100104,
    detailTerm: {
      endedAt: null,
      comment: '',
      reason: '',
    },
    department: {
      department: '6011621cdb99454264a9581e',
      realizationDate: null,
      startDatePrivilege: null,
      endDatePrivilege: null,
    },
    subDepartment: '602ada7d4bafd31b207bcb8b',
    services: [
      {
        _id: '60313051651d3000088dea82',
        status: 'PENDING',
        service: '60116105db99454264a956f7',
      },
      {
        status: 'PENDING',
        service: '60116105db99454264a956f8',
      },
      {
        status: 'PENDING',
        service: '60116105db99454264a956fa',
      },
      {
        status: 'PENDING',
        service: '60116105db99454264a956fb',
      },
      {
        status: 'PENDING',
        service: '60116105db99454264a956fc',
      },
    ],
    centers: ['5fce40ebc0e22d00081ac1e4'],
    workPlaces: ['60116097db99454264a95646'],
    contract: {
      hours: null,
      signedAt: null,
      termAt: null,
      address: null,
    },
    categories: [
      {
        _id: '603027e0dae7b900094f10b9',
        category: '6011604cdb99454264a95642',
        startDate: '2021-03-24T21:04:25.848Z',
      },
    ],
    positions: [],
    createdAt: '2021-02-19T15:40:55.102Z',
  },
}

const input4 = {
  _id: '602fdc06e0f0d4000842ec82',
  input: {
    code: 100104,
    detailTerm: {
      endedAt: null,
      comment: '',
      reason: '',
    },
    department: {
      department: '6011621cdb99454264a9581e',
      realizationDate: null,
      startDatePrivilege: null,
      endDatePrivilege: null,
    },
    subDepartment: '602ada7d4bafd31b207bcb8b',
    services: [
      {
        _id: '60313051651d3000088dea82',
        status: 'PENDING',
        service: '60116105db99454264a956f7',
      },
    ],
    centers: ['5fce40ebc0e22d00081ac1e4'],
    workPlaces: ['60116097db99454264a95646'],
    contract: {
      hours: null,
      signedAt: null,
      termAt: null,
      address: null,
    },
    categories: [
      {
        _id: '603027e0dae7b900094f10b9',
        category: '6011604cdb99454264a95642',
        startDate: '2021-03-24T21:04:25.848Z',
      },
    ],
    positions: [],
    createdAt: '2021-02-19T15:40:55.102Z',
  },
}

const newItems = array => array.filter(item => !item._id)
const oldItems = array => array.filter(item => item._id)

console.log(newItems(input3.input.services))
// console.log(value[10].values)
// getKeyValue(input2[key])
