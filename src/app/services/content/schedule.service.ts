import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {publishReplay, refCount} from 'rxjs/operators';
import {IScheduleRequest, IScheduleResponse, IScheduleFullResponse} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private _schedule$: Observable<IScheduleResponse[]>;
  private _fullSchedule$: Observable<IScheduleFullResponse[]>;

  constructor(private _http: HttpClient) { }

  public getSchedule(queryParams?: IScheduleRequest, options: {cache?: boolean} = {cache: true}): Observable<IScheduleResponse[]> {
    if (options.cache === false) {
      this._schedule$ = null;
    }

    if (!this._schedule$) {
      let params = '';

      if (queryParams) {
        params = '?' + Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
      }

      this._schedule$ = this._http.get<IScheduleResponse[]>(`//api.tvmaze.com/schedule${params}`).pipe(
        publishReplay(1),
        refCount(),
      );
    }

    return this._schedule$;
  }

  public getFullSchedule(options: {cache?: boolean} = {cache: true}): Observable<IScheduleFullResponse[]> {
    if (options.cache === false) {
      this._fullSchedule$ = null;
    }

    if (!this._fullSchedule$) {
      this._fullSchedule$ = this._http.get<IScheduleFullResponse[]>('//api.tvmaze.com/schedule/full').pipe(
        publishReplay(1),
        refCount(),
      );
    }

    return this._fullSchedule$;
  }
}
