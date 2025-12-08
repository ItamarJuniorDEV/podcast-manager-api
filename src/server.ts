import * as http from 'http';

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {}
);

const PORT = 3333;

server.listen(process.env.PORT, () => {
  console.log(`Servidor Iniciado na Porta ${PORT}`);
});