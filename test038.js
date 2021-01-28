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
// log(date1.toString())
// log(verifiedMonth)
// log(verifiedDay)
// log(year)

// log(`${verifiedDay}-${verifiedMonth}-${year}`, 'warn')
const admins = [
  {
    _id: '5fad8f7a15fb39b809f5046a',
    role: 'SAM',
    firstName: 'Alex',
    lastName: 'Maturana',
    rut: '17.234.557-3',
    sub: '5d2db4ed-44fc-4985-8687-e4cbaf7c407a',
    createdAt: {
      $date: '2020-11-12T19:39:38.657Z',
    },
    updatedAt: {
      $date: '2020-11-12T19:39:38.657Z',
    },
  },
  {
    _id: '5fad90665d963cbbbd4a6580',
    role: 'SAM',
    firstName: 'cristobal',
    lastName: 'Contreras',
    rut: '18.979.569-6',
    sub: '885e0a4d-1bb5-4471-8112-1b045250dd3a',
    createdAt: {
      $date: '2020-11-12T19:43:34.763Z',
    },
    updatedAt: {
      $date: '2020-11-12T19:43:34.763Z',
    },
  },
  {
    _id: '5fad93ed7607970c94cdef5a',
    role: 'SAM',
    firstName: 'Jesús',
    lastName: 'González',
    rut: '12.345.678-5',
    sub: '5d60201e-510e-45e0-afc5-bee423ee2b8f',
    createdAt: {
      $date: '2020-11-12T19:58:37.614Z',
    },
    updatedAt: {
      $date: '2020-11-12T19:58:37.614Z',
    },
  },
  {
    _id: '5fad940b41811e0cfdcb3592',
    role: 'SAM',
    firstName: 'German',
    lastName: 'Labra',
    rut: '24.654.766-1',
    sub: 'b9c5e027-e97f-4720-af23-3c4ff757803a',
    createdAt: {
      $date: '2020-11-12T19:59:07.318Z',
    },
    updatedAt: {
      $date: '2020-11-12T19:59:07.318Z',
    },
  },
  {
    _id: '5faec180510b5a1c733a7a2b',
    role: 'SAM',
    firstName: 'A.A.',
    lastName: 'Espinozas',
    rut: '8.633.298-1',
    sub: '5b328a76-29e3-4b3b-8ea6-f77288f73f47',
    createdAt: {
      $date: '2020-11-13T17:25:20.719Z',
    },
    updatedAt: {
      $date: '2020-11-13T17:25:20.719Z',
    },
  },
  {
    _id: '5faec1ad93d0171cbdfce31c',
    role: 'SAM',
    firstName: 'Francisco',
    lastName: 'Fernández',
    rut: '17.495.308-2',
    sub: '3b9a240c-76fb-4796-a1ef-dd875dfcac78',
    createdAt: {
      $date: '2020-11-13T17:26:05.579Z',
    },
    updatedAt: {
      $date: '2020-11-13T17:26:05.579Z',
    },
  },
  {
    _id: '5faec1ee1ec39c1d387591d6',
    role: 'SAM',
    firstName: 'Palma',
    lastName: 'Palma',
    rut: '5.440.358-5',
    sub: '2fd62626-4817-46af-89ec-b8372d01fad6',
    createdAt: {
      $date: '2020-11-13T17:27:10.746Z',
    },
    updatedAt: {
      $date: '2020-11-13T17:27:10.746Z',
    },
  },
  {
    _id: '5faec21bc53d781d899b50c6',
    role: 'SAM',
    firstName: 'González',
    lastName: 'Gonzáles',
    rut: '17.890.089-7',
    sub: '0cd3cd3b-854a-4b6c-9d81-71dc6c3724db',
    createdAt: {
      $date: '2020-11-13T17:27:55.447Z',
    },
    updatedAt: {
      $date: '2020-11-13T17:27:55.447Z',
    },
  },
  {
    _id: '5fce33ec1f7e440008e4e8fe',
    firstName: 'Marcelo',
    lastName: 'Arias',
    role: 'SAM',
    rut: '13.068.862-4',
    sub: '7d0b38bd-f7f0-4172-a6bc-d923d961ea16',
    createdAt: {
      $date: '2020-12-07T13:53:48.348Z',
    },
    updatedAt: {
      $date: '2020-12-07T13:53:48.348Z',
    },
  },
]
const userToFind = '5fad90665d963cbbbd4a6580'
console.log(admins.find(user => user._id === userToFind))
