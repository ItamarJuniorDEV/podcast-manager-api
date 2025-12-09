import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && req.url === "/api/episode") {
      await getFilterEpisodes(req, res);
    }
  }
);

const PORT = 3333;

server.listen(process.env.PORT, () => {
  console.log(`Servidor Iniciado na Porta ${PORT}`);
});
