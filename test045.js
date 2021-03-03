const lodash = require('lodash')
const rambda = require('rambda')

const data = [
  {
    _id: '603521c6a146c70574f42d27',
    event: 'SERVICE_ADDED',
    entity: { name: 'SERVICES', _id: '602fdc06e0f0d4000842ec82' },
    professional: { _id: '602fdc06e0f0d4000842ec82', firstName: 'Cristobal' },
    user: { firstName: 'cristobal' },
    meta: [
      {
        name: 'services',
        value: '60116105db99454264a956f7',
        values: [
          { name: 'service', value: '60116105db99454264a956f7' },
          { name: 'status', value: 'PENDING' },
        ],
      },
    ],
    createdAt: '2021-02-23T15:39:50.388Z',
  },
  {
    _id: '603521e50cfdfe057f48d902',
    event: 'SERVICE_REMOVED',
    entity: { name: 'SERVICES', _id: '603521c6a146c70574f42d26' },
    professional: { _id: '602fdc06e0f0d4000842ec82', firstName: 'Cristobal' },
    user: { firstName: 'cristobal' },
    meta: [
      {
        name: 'services',
        value: '60116105db99454264a956f7',
        values: [
          { name: '_id', value: '603521c6a146c70574f42d26' },
          { name: 'status', value: 'PENDING' },
          { name: 'service', value: '60116105db99454264a956f7' },
          {
            name: 'updatedAt',
            value: 'Tue Feb 23 2021 12:39:50 GMT-0300 (Chile Summer Time)',
          },
          {
            name: 'createdAt',
            value: 'Tue Feb 23 2021 12:39:50 GMT-0300 (Chile Summer Time)',
          },
          { name: 'realizationDate', value: null },
          { name: 'startDatePrivilege', value: null },
          { name: 'endDatePrivilege', value: null },
        ],
      },
    ],
    createdAt: '2021-02-23T15:40:21.353Z',
  },
  {
    _id: '60354109f9ff980bc85e759d',
    event: 'SERVICE_ADDED',
    entity: { name: 'SERVICES', _id: '603521c6a146c70574f42d26' },
    professional: { _id: '602fdc06e0f0d4000842ec82', firstName: 'Cristobal' },
    user: { firstName: 'cristobal' },
    meta: [
      {
        name: 'services',
        value: '60116105db99454264a956f7',
        values: [
          { name: '_id', value: '603521c6a146c70574f42d26' },
          { name: 'status', value: 'PENDING' },
          { name: 'service', value: '60116105db99454264a956f7' },
          {
            name: 'updatedAt',
            value: 'Tue Feb 23 2021 12:39:50 GMT-0300 (Chile Summer Time)',
          },
          {
            name: 'createdAt',
            value: 'Tue Feb 23 2021 12:39:50 GMT-0300 (Chile Summer Time)',
          },
          { name: 'realizationDate', value: null },
          { name: 'startDatePrivilege', value: null },
          { name: 'endDatePrivilege', value: null },
        ],
      },
    ],
    createdAt: '2021-02-23T15:40:21.353Z',
  },
]

const filterResultByEntityName = () => {
  const historyEntitiesIDs = data.map(element => element.entity._id)
  return [...new Set(historyEntitiesIDs)].map(id => ({
    id,
    items: data.filter(element => element.entity._id === id),
  }))
}

const gata = filterResultByEntityName().map(el => {
  const xd = el.items.map(x => x) // .find(m => m.name === 'status').value
  // console.log(xd)
  console.log(xd[0]?.meta[0]?.value)
})

// const gata = filterResultByEntityName().map(el => (
//   <>
//     <Item>
//       {el.items.map(i => (
//         <>
//           <ServiceName>
//             {i}
//           </ServiceName>
//           <Component>
//             <Fecha>{i.event === 'SERVICE_ADDED' && moment(i.createdAt)}</Fecha>
//             <FechaTermino></FechaTermino>
//           </Component>
//         </>
//       ))}
//     </Item>
//   </>
// ))

console.log(gata)

const val = [
  {
    id: 'sddsds',
    items: [{}, {}],
  },
  {
    id: 'asas',
    items: [{}],
  },
]
