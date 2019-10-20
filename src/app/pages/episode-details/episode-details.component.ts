import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router"

import {ShowEpisode} from "../../models";
import {EpisodeDetailsService} from "./services/episode-details.service";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent {
  public data: ShowEpisode;
  public isEpisodeVisible: boolean;

  constructor(private _episodeDetailsService: EpisodeDetailsService,
              private _route: ActivatedRoute) {
    this._getEpisode();
  }

  private _getEpisode(): void{
    this._episodeDetailsService.selectedEpisode$.subscribe((data) => {
      if (data) {
        this.data = data;
        this.isEpisodeVisible = true;
      } else {
        const id = this._route.snapshot.params['id'];
        this._episodeDetailsService.getEpisodeById(id).subscribe((data) => {
          this.data = data;
          this.isEpisodeVisible = true;
        });
      }
    });
  }
}
