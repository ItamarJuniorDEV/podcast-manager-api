import { filterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
):Promise<filterPodCastModel> => {

  const responseFormat: filterPodCastModel = {
    statusCode: 0,
    body: []
  };

  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT;

  if (data.length !== 0) {
    responseFormat.statusCode = statusCode.OK;
  } else {
    responseFormat.statusCode = statusCode.NO_CONTENT;
  }

    responseFormat.body = data;

  return responseFormat;
}