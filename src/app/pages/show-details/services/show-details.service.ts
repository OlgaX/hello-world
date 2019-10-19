import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ShowDetails, StorageKey, ShowEpisode} from "../../../models";
import {ShowService} from "../../../services/content/show.service";
import {StorageService} from "../../../services/storage.service";
import {EpisodeDetailsService} from "../../episode-details/services/episode-details.service";

@Injectable()
export class ShowDetailsService {

  constructor(private _showsService: ShowService,
              private _storageService: StorageService,
              private _episodeDetailsService: EpisodeDetailsService) { }

  public set selectedEpisode(data: ShowEpisode) {
    this._episodeDetailsService.selectedEpisode = data;
  }

  public getShowById(id: number): Observable<ShowDetails> {
    return this._showsService.getShowById(id).pipe(
      map((response) => new ShowDetails(response)),
    );
  }

  public getShowEpisodes(id: number): Observable<{[season: number]: ShowEpisode[]}> {
    return this._showsService.getShowEpisodes(id).pipe(
      map((response) => {
        const result = {};
        const today = +new Date();

        response.forEach((episode) => {
          const _episode = new ShowEpisode(episode);
          _episode.isNew = +new Date(_episode.airdate) > today;

          if (result[_episode.seasonNumber]) {
            result[_episode.seasonNumber].unshift(_episode);
          } else {
            result[_episode.seasonNumber] = [_episode];
          }
        });

        return result;
      })
    );
  }

  public saveShowAsWatched(item: ShowDetails, maxNumber: number): void {
    let watched = this._storageService.getObjectFromStorage(StorageKey.Watched);

    if (watched instanceof ShowDetails) {
      watched = [watched];
    } else if (!Array.isArray(watched)) {
      watched = [];
    }

    const index = watched.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      watched.splice(index, 1);
    }

    watched.splice(0, 0 , item);

    if (watched.length > maxNumber) {
      watched.splice(maxNumber, 1);
    }

    this._storageService.setObjectIntoStorage(StorageKey.Watched, watched);
  }
}
