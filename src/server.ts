import * as http from "http";
import { getListEpisodes } from './controllers/podcasts-controller';

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req, res);
    } 
  }
);

const PORT = 3333;

server.listen(process.env.PORT, () => {
  console.log(`Servidor Iniciado na Porta ${PORT}`);
});