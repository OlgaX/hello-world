import {IShowDetailsAPI} from "../";

export interface IScheduleResponse {
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

  show: IShowDetailsAPI;

  _links: {
    self: {
      href: string;
    }
  };
}
