const http = require('http')
const SERVER = require('./server.js')

server = new SERVER()

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    server.putSite(req, res)
}).listen(3000)
