import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {map, publishReplay, refCount} from 'rxjs/operators';
import {IScheduleRequest, ShowDetails, StorageKey} from "../../../models";
import {ScheduleService} from "../../../services/content/schedule.service";
import {ShowService} from "../../../services/content/show.service";
import {StorageService} from "../../../services/storage.service";

@Injectable()
export class HomeService {

  private _recommendedShow$: Observable<ShowDetails>;

  private _newestShowId: number;
  private _recommendedShowId: number;

  constructor(private _scheduleService: ScheduleService,
              private _showsService: ShowService,
              private _storageService: StorageService) {
  }

  public getShowFromSchedule(queryParams?: IScheduleRequest): Observable<ShowDetails> {
    return this._scheduleService.getSchedule(queryParams).pipe(
      map((response) => {
        const item = response[0] ? response[0].show : {};
        this._newestShowId = item.id;
        return new ShowDetails(item);
      }),
    );
  }

  public getShowById(id: number): Observable<ShowDetails> {
    if (!this._recommendedShow$) {
      this._recommendedShow$ = this._showsService.getShowById(id).pipe(
        map((response) => new ShowDetails(response)),
        publishReplay(1),
        refCount(),
      );

      this._recommendedShowId = id;
    }

    return this._recommendedShow$;
  }

  public getRandomShowsFromSchedule(numberOfShows: number): Observable<ShowDetails[]> {
    return this._scheduleService.getFullSchedule().pipe(
      map((response) => {
        const result: ShowDetails[] = [];

        while (result.length < numberOfShows ) {
          const randomShow = response[Math.floor(Math.random() * response.length)];
          const isAlreadyInArray = result.some((i) => i.id === randomShow.id);

          if (!isAlreadyInArray &&
              randomShow.id !== this._newestShowId &&
              randomShow.id !== this._recommendedShowId) {
            result.push(new ShowDetails(randomShow._embedded.show));
          }

        }

        return result;
      })
    )
  }

  public getWatchedShows(): ShowDetails[] {
    return this._storageService.getObjectFromStorage(StorageKey.Watched);
  }
}
