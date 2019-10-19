import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"

import {ShowDetails, ShowEpisode} from "../../models";
import {ShowDetailsService} from "./services/show-details.service";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  public data: ShowDetails;
  public episodesBySeasons: {[season: number]: ShowEpisode[]};

  private _showId: number;
  private _selectedEpisode: ShowEpisode;

  constructor(private _showDetailsService: ShowDetailsService,
              private _route: ActivatedRoute) { }

  public ngOnInit(): void {
    this._getShow();
    this._getEpisodesBySeasons();
  }

  public onActivateEpisodeComponent(): void {
    this._showDetailsService.selectedEpisode = this._selectedEpisode;
  }

  public onSelectEpisode(episode): void {
    this._selectedEpisode = episode;
    this._showDetailsService.selectedEpisode = episode;
  }

  private _getShow(): void{
   this._showId = this._route.snapshot.params['id'];

    this._showDetailsService.getShowById(this._showId)
      .subscribe((show) => {
        this.data = show;
        this._showDetailsService.saveShowAsWatched(show, 12);
      });
  }

  private _getEpisodesBySeasons(): void {
    this._showDetailsService.getShowEpisodes(this._showId)
      .subscribe((data) => this.episodesBySeasons = data);
  }

}
