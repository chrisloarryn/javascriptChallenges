const categories = [
  {
    _id: '6011604cdb99454264a9563f',
    clcIdStr: 'RA',
    name: 'RESIDENTE ASOCIADO',
  },
  {
    _id: '6011604cdb99454264a95638',
    clcIdStr: 'IN',
    name: 'ADJUNTO',
  },
  {
    _id: '6011604cdb99454264a9563e',
    clcIdStr: 'CO',
    name: 'RESIDENTE',
  },
  {
    _id: '6011604cdb99454264a95642',
    clcIdStr: 'SE',
    name: 'SENIOR',
  },
  {
    _id: '6011604cdb99454264a9563a',
    clcIdStr: 'AS',
    name: 'ASOCIADO',
  },
  {
    _id: '6011604cdb99454264a9563d',
    clcIdStr: 'SO',
    name: 'PLANTA',
  },
  {
    _id: '6011604cdb99454264a9563c',
    clcIdStr: 'OC',
    name: 'INVITADO',
  },
  {
    _id: '6011604cdb99454264a95637',
    clcIdStr: 'AC',
    name: 'ACREDITADO',
  },
  {
    _id: '6011604cdb99454264a95640',
    clcIdStr: 'RR',
    name: 'RESIDENTE REEMPLAZO',
  },
]

const pickedCategories = [
  {
    _id: '602ff994591a9f000896e83b',
    category: '6011604cdb99454264a95638',
    startDate: '2021-02-02T17:46:57.635Z',
    updatedAt: '2021-03-19T16:40:29.787Z',
    createdAt: '2021-03-19T16:40:29.787Z',
  },
  {
    _id: '602ffb41591a9f000896e83e',
    category: '6011604cdb99454264a95638',
    startDate: '2021-02-10T17:52:59.713Z',
    updatedAt: '2021-03-19T16:40:29.787Z',
    createdAt: '2021-03-19T16:40:29.787Z',
  },
  {
    _id: '4074029e6c823b22c350fa6f',
    category: '6011604cdb99454264a95638',
    startDate: '2021-03-18T13:50:52.485Z',
    updatedAt: '2021-03-19T16:40:29.787Z',
    createdAt: '2021-03-19T16:40:29.787Z',
  },
  {
    _id: '407bb21b02a7d74d6559c4c8',
    category: '6011604cdb99454264a9563f',
    startDate: '2021-03-03T13:59:16.873Z',
    updatedAt: '2021-03-19T16:40:29.787Z',
    createdAt: '2021-03-19T16:40:29.787Z',
  },
  {
    _id: '4c02fb643ded63174886bdbe',
    category: '6011604cdb99454264a9563d',
    updatedAt: '2021-03-19T19:42:53.522+00:00',
    createdAt: '2021-03-19T19:42:53.522+00:00',
  },
]

const pickedCategories2 = [
  {
    _id: '602ff994591a9f000896e83b',
    category: '6011604cdb99454264a95638',
    startDate: '2021-02-02T17:46:57.635Z',
    updatedAt: '2021-03-19T16:40:29.787Z',
    createdAt: '2021-03-19T16:40:29.787Z',
  },
]

const pickedOnes = pickedCategories
  .map(category => ({
    ...category,
    category: categories.find(c => c._id === category.category),
  }))
  .map(el => el?.category?.name)
  .pop()

console.log(pickedOnes)
