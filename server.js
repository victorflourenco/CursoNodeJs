const http = require("http") // Módulos nativos do Node
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Olá Mundo \n Meu primeiro Script')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})