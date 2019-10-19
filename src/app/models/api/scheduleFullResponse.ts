import {IShowDetailsAPI} from "../";

export interface IScheduleFullResponse {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airstamp: string | Date;
  airtime: string;
  runtime: number;
  image: string;
  summary: string;

  _embedded: {
    show: IShowDetailsAPI;
  };

  _links: {
    self: {
      href: string;
    }
  };
}
