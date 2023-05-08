const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1>final response</h1>')
    } else {
        res.end('<p>page not found</p>')
    }
})

server.listen(2000, "127.0.0.1", (req, res) => {
    console.log('server created!')
})