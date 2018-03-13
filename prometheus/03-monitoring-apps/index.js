const http = require('http')
const prometheus = require('prom-client')

// Webserver port
const port = 4000

// Exposes some default metrics recommended by Prometheus:
// https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors
prometheus.collectDefaultMetrics()

// Create a Prometheus metric of type 'counter'
const counter = new prometheus.Counter({
  name: 'demo_website_loaded',
  help: 'Counts how many times the website has been loaded',
  labelNames: ['path', 'method', 'statusCode']
})

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      // Set label values and increase counter
      counter.labels(req.url, req.method, 200).inc()

      // A bit hacky, just for demo purposes!
      const currentValue = counter.hashMap['method:GET,path:/,statusCode:200'].value
      return res.end(`Website has been loaded ${currentValue} times since the webserver has been started.`)

    case '/metrics':
      // Expose service metrics
      res.setHeader('Content-Type', prometheus.contentType)
      return res.end(prometheus.register.metrics())

    default:
      res.statusCode = 404

      // Set label values and increase counter
      counter.labels(req.url, req.method, res.statusCode).inc()

      return res.end()
  }
})

server.listen(port, () => console.log(`Metrics available on http://localhost:${port}/metrics`))
