import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

import {HomeComponent} from './home.component';
import {ShowBannerComponent} from './components/show-banner/show-banner.component';
import {ShowPreviewItemComponent} from './components/show-preview-item/show-preview-item.component';
import {HomeService} from "./services/home.service";


@NgModule({
  declarations: [
    HomeComponent,
    ShowBannerComponent,
    ShowPreviewItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    HomeService,
    DatePipe,
  ],
})
export class HomeModule { }
