import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];


    if (req.method === "GET" && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
    }
  }
);

const PORT = 3333;

server.listen(process.env.PORT, () => {
  console.log(`Servidor Iniciado na Porta ${PORT}`);
});
