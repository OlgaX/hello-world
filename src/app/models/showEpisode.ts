import {IShowEpisodesResponse} from "./";
import {StripHtmlPipe} from "../shared/pipes/strip-html.pipe";

export class ShowEpisode {
  public id: number;
  public title: string;
  public description: string;
  public url: string;
  public img;
  public episodeNumber: number;
  public seasonNumber: number;
  public airstamp: string | Date;
  public airdate: string;

  [key: string]: any;

  constructor(data: IShowEpisodesResponse) {
    this.id = data.id;
    this.title = data.name;
    this.url = data.url;
    this.episodeNumber = data.number;
    this.seasonNumber = data.season;
    this.airstamp = data.airstamp;
    this.airdate = data.airdate;

    if (data.summary) {
      this.description = new StripHtmlPipe().transform(data.summary);
    }

    if (data.image) {
      this.img = data.image.medium;
    }
  }
}
