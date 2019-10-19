import {IShowDetailsAPI} from "./";
import {StripHtmlPipe} from "../shared/pipes/strip-html.pipe";

export class ShowDetails {
  public id: number;
  public title: string;
  public description: string;
  public url: string;
  public img = 'https://via.placeholder.com/210x295.png';
  public genres: string[];
  public rating: number;

  [key: string]: any;

  constructor(data: IShowDetailsAPI) {
    this.id = data.id;
    this.title = data.name;
    this.url = data.url;

    if (data.summary) {
      this.description = new StripHtmlPipe().transform(data.summary);
    }

    if (data.image) {
      this.img = data.image.medium;
    }

    if (data.genres && data.genres.length) {
      this.genres = data.genres;
    }

    if (data.rating) {
      this.rating = data.rating.average;
    }

  }
}
