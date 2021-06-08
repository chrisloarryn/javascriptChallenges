const objElement = {
  date: '2021-05-06',
  name: 'atrik',
  paymentMode: 'cash',
  price: ['200', '2255'],
  product: ['muscle', 'safasf'],
  unit: ['200', '2255'],
}

console.log(Array.from(objElement))

const modifyPeople = (args) => {
  if (args.name == 'Yisus 2') return null
  return { ...args, age: 1, lastName: undefined }
}

const yisuses = [
  {
    name: 'Yisus 1'
  },
  {
    name: 'Yisus 2'
  }
]

const modifiedYisuses = yisuses.map(modifyPeople)

console.log(modifiedYisuses)