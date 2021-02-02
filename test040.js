const system = require('system-commands')

exports.fetchApi = async ({
  type = 'Bearer',
  method = 'POST',
  token = '',
  contentType = 'application/graphql',
  url = 'https://api.yelp.com/v3/graphql',
  query,
}) => {
  return await system(`curl -X ${method} -H "Authorization: ${type} ${token}" -H "Content-Type: ${contentType}" ${url} --data '
${query}'`)
    .then(output => output)
    .catch(error => error)
}
