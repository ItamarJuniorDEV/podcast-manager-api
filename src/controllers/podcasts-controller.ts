import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { statusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { filterPodCastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();

  res.writeHead(statusCode.OK, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res:ServerResponse,
) => {

  const content: filterPodCastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content.body));
}
