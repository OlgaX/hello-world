import {Component, OnInit} from '@angular/core';

import {ShowDetails} from "../../models";
import {HomeService} from "./services/home.service";

const RECOMMENDED_SHOW_ID = 6771;
const MAX_NUMBER_OF_SHOWS = 12;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public newestShow: ShowDetails;
  public recommendedShow: ShowDetails;
  public watchedShows: ShowDetails[];
  public randomShows: ShowDetails[];

  constructor(private _homeService: HomeService) { }

  public ngOnInit(): void {
    this._getNewestShow();
    this._getRecommended();
    this._getWatchedShows();
    this._getRandomShows();
  }

  private _getNewestShow(): void {
    this._homeService.getShowFromSchedule()
      .subscribe((show) => this.newestShow = show);
  }

  private _getRecommended(): void{
    this._homeService.getShowById(RECOMMENDED_SHOW_ID)
      .subscribe((show) => this.recommendedShow = show);
  }

  private _getWatchedShows(): void {
    this.watchedShows = this._homeService.getWatchedShows();
  }

  private _getRandomShows(): void {
    this._homeService.getRandomShowsFromSchedule(MAX_NUMBER_OF_SHOWS)
      .subscribe((shows) => this.randomShows = shows);
  }

}
