import { PodcastModel } from "./podcast-model";

export interface filterPodCastModel {
  statusCode: number,
  body: PodcastModel[];
}