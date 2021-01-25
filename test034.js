// Según los arreglos entregados a continuación, crea una
// función que retorne los nombres de los workers en orden
// decreciente por la suma total de los puntos acumulados
// en las empresas en las que han trabajado, luego muéstralo
// por consola.

const workers = [
  { id: 1, rut: '19725043-7', name: 'CHRISTOPHER KIESSLING' },
  { id: 2, rut: '20013864-3', name: 'DAN PONCE' },
  { id: 3, rut: '18630603-1', name: 'ITALO MASSERANO' },
  { id: 4, rut: '10448056-k', name: 'JORDAN MONTANO' },
  { id: 5, rut: '6248451-9', name: 'MELQUIADES PEÑA' },
  { id: 6, rut: '8702086-k', name: 'SHY AGAM' },
]

const tikets = [
  { workerId: 6, companyId: 1, points: 15000 },
  { workerId: 1, companyId: 3, points: 18000 },
  { workerId: 5, companyId: 3, points: 135000 },
  { workerId: 2, companyId: 2, points: 5600 },
  { workerId: 3, companyId: 1, points: 23000 },
  { workerId: 5, companyId: 2, points: 15000 },
  { workerId: 3, companyId: 3, points: 45900 },
  { workerId: 2, companyId: 3, points: 19000 },
  { workerId: 4, companyId: 3, points: 51000 },
  { workerId: 5, companyId: 1, points: 89000 },
  { workerId: 1, companyId: 2, points: 1600 },
  { workerId: 5, companyId: 3, points: 37500 },
  { workerId: 6, companyId: 1, points: 19200 },
  { workerId: 2, companyId: 3, points: 10000 },
  { workerId: 3, companyId: 2, points: 5400 },
  { workerId: 3, companyId: 1, points: 9000 },
  { workerId: 4, companyId: 3, points: 13500 },
  { workerId: 2, companyId: 1, points: 38200 },
  { workerId: 5, companyId: 2, points: 17000 },
  { workerId: 1, companyId: 3, points: 1000 },
  { workerId: 5, companyId: 2, points: 600 },
  { workerId: 6, companyId: 1, points: 16200 },
  { workerId: 2, companyId: 2, points: 10000 },
]

const companies = [
  { id: 1, name: 'SONDA' },
  { id: 2, name: 'ENTEL' },
  { id: 3, name: '23KY' },
]

const workersPoints = () => {
  return [...workers]
    .map(worker => {
      return [...tikets]
        .map(t => {
          const [{ name: companyName }] = companies.filter(
            company => company.id === t.companyId,
          )
          const [{ name: workerName }] = workers.filter(
            worker => worker.id === t.workerId,
          )
          return {
            ...t,
            companyName,
            workerName: workerName
              .replace('Ñ', 'N')
              .trim()
              .split(' ')
              .join('_'),
          }
        })
        .sort((a, b) => a.workerId - b.workerId)
        .filter(tiket => tiket.workerId === worker.id)
        .reduce((acc, worker) => {
          let { points, workerName } = worker
          return {
            ...acc,
            [workerName]: [...(acc[workerName] || []), points],
          }
        }, {})
    })
    .map((e, key) => {
      const [element] = Object.keys(e)
      /* return {
        [element]: e[element].reduce((x, y) => x + y),
      }
       */
      return {
        name: element,
        points: e[element].reduce((x, y) => x + y),
      }
    })
    .sort((a, b) => {
      const [one] = Object.keys(a)
      const [two] = Object.keys(b)
      // return b[two] - a[one]
      return b.points - a.points
    })
}

console.log(workersPoints())

// *Entregar dentro de script tag en archivo formato html al correo christopher@thetiket.com, por favor no uses editores de código online
