import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ShowDetailsComponent} from "./show-details.component";
import {ShowDetailsService} from "./services/show-details.service";

@NgModule({
  declarations: [ShowDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [ShowDetailsService],
})
export class ShowDetailsModule { }
