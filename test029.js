// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

async function getUsernames(threshold) {
  // console.log(threshold)
  const url = `https://jsonmock.hackerrank.com/api/article_users?page${1}`
  let fetched
  const https = require('https')
  https
    .get(url, res => {
      res.setEncoding('utf8')
      let data = ''

      // called when a data chunk is received.
      res.on('data', chunk => {
        data += chunk
      })

      // called when the complete response is received.
      res.on('end', () => {
        const { data: dataParsed } = data && JSON.parse(data)
        console.log(Array.isArray(dataParsed))
        console.log(typeof dataParsed)
        const newA = Object.keys(dataParsed).map(p => dataParsed[p].username)
        console.log(newA)
      })
    })
    .on('error', err => {
      console.log('Error: ', err.message)
    })
  /* const fetchedd = await window.fetch(url, {
    headers: 'application/json',
  })*/
}

getUsernames(10)
