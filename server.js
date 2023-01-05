const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})