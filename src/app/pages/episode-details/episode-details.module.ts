import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {EpisodeDetailsComponent} from "./episode-details.component";
import {EpisodeDetailsService} from "./services/episode-details.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [EpisodeDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [EpisodeDetailsService],
})
export class EpisodeDetailsModule { }
