const input = {
  status: 'REJECTED',
  detailTerm: {
    endedAt: '2021-02-11T15:38:01.955Z',
    comment: 'fgfgfgfgf',
    reason: 'TWO_REASON',
  },
}

const getKeyValue = x =>
  Object.keys(x).map(key => ({
    name: key,
    value: x[key],
  }))

const value = Object.keys(input).map(key => {
  const value = typeof input[key] === 'string' ? input[key] : key
  const values =
    typeof input[key] === 'object' && typeof key === 'string'
      ? getKeyValue(input[key])
      : []
  return { name: `${key.trim()}`, value, values }
})

console.log(value)
