import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {IShowDetailsAPI, IShowEpisodesResponse} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private _http: HttpClient) { }

  public getShowById(id: number): Observable<IShowDetailsAPI> {
    return this._http.get<IShowDetailsAPI>(`//api.tvmaze.com/shows/${id}`);
  }

  public getShowEpisodes(id: number): Observable<IShowEpisodesResponse[]> {
    return this._http.get<IShowEpisodesResponse[]>(`//api.tvmaze.com/shows/${id}/episodes`);
  }
}
