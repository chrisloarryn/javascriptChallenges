const data = [
  { man: { month: { day: 1 } } },
  { man: { year: { day: 9 } } },
  { man: { year: { day: 10 } } },
  { man: { year: { day: 1 } } },
  { man: { year: { day: 3 } } },
  { man: { year: { day: 4 } } },
  { woman: { month: { day: 1 } } },
]

const res = data.filter(doc => doc?.man?.year?.day === 1)

console.log(res)
