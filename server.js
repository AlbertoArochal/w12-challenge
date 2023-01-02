const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/api', router); // maneja todas las peticiones a rutas que comiencen con /api/
server.use(middlewares);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
