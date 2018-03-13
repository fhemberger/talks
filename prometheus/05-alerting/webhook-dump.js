const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return
  }

  console.log('\nPOST:')
  let body = ''
  req.on('data', (data) => {
    body += data
  })
  req.on('end', () => {
    try {
      body = JSON.parse(body)
    } catch (_) {

    }
    console.dir(body, { depth: null })
  })
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end()
})

const port = 4000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
