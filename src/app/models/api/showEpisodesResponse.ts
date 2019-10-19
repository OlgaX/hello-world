export interface IShowEpisodesResponse {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airstamp: string | Date;
  airtime: string;
  runtime: number;
  summary: string;

  image?: {
    medium?: string;
    original?: string;
  }

  _links: {
    self: {
      href: string;
    }
  };
}
