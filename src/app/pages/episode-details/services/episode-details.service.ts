import {Injectable} from '@angular/core';

import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {EpisodeService} from "../../../services/content/episode.service";
import {ShowEpisode} from "../../../models";

@Injectable()
export class EpisodeDetailsService {

  private _selectedEpisode: Subject<ShowEpisode> = new Subject<ShowEpisode>();

  constructor(private _episodeService: EpisodeService) { }

  public get selectedEpisode$(){
    return this._selectedEpisode.asObservable();
  }

  public set selectedEpisode(data: ShowEpisode) {
    this._selectedEpisode.next(data);
  }

  public getEpisodeById(id: number): Observable<ShowEpisode> {
    return this._episodeService.getEpisodeById(id).pipe(
      map((response) => new ShowEpisode(response)),
    );

  }
}
