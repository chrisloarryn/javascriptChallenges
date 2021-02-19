const { valueFromAST } = require('graphql')

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
  console.log(keyyyys)
  const values =
    typeof input2[key] === 'object' &&
    typeof key === 'string' &&
    key === 'detailTerm'
      ? getKeyValue(input2[key])
      : /* : key === 'address'
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
        []
  return { name: `${key.trim()}`, value, values }
})

console.log(value[10].values)
// getKeyValue(input2[key])
