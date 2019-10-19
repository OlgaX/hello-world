import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {IShowEpisodesResponse} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private _http: HttpClient) { }

  public getEpisodeById(id: number): Observable<IShowEpisodesResponse> {
    return this._http.get<IShowEpisodesResponse>(`//api.tvmaze.com/episodes/${id}`);
  }
}
