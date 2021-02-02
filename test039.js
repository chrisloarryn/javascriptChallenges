const Axios = require('axios')
const { gql } = require('@apollo/client')
const system = require('system-commands')
const { fetchApi } = require('./test040')

const urlBase = 'api.yelp.com'
const apiVersion = 'v3'
const protocol = 'https'
const query = 'businesses'
const clientId = '1WzOFQN6owpL375zFZrdbg'
const token =
  'xIwPcgqa1AOBLPTMothrSanLU7wbzoQqZ8H0AjxbWX8rC2MzMxLNJeDAQmsZ9JSgF02T2JECe5wB8lYCEshkoei5GzRrlOf2cl98xfUf9TzbAQBwZnMI9ijflWwTYHYx'
const find = 'north-india-restaurant-san-francisco'
const url = `${protocol}://${urlBase}/${query}/${find}`

const axios = Axios.create({
  baseUrl: `${protocol}://${urlBase}/${apiVersion}`,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})

const fetch = async () => {
  const res = axios
    .get(`/${query}/${find}`)
    .then(res => res)
    .catch(rej => `${rej.response.status} - ${rej.response.statusText}`)
  console.log(await res)
}

const OTHER = `{
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }`

fetch()

const fetch2 = async () => {
  const result = await fetchApi({ token, query: OTHER })
  console.log(result)
}
fetch2()
system(`curl -X POST -H "Authorization: Bearer ${token}" -H "Content-Type: application/graphql" https://api.yelp.com/v3/graphql --data '
${OTHER}'`)
  .then(output => output)
  .catch(error => error)
