import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from "./modules/header/header.module";
import {HomeModule} from "./pages/home/home.module";
import {ShowDetailsModule} from "./pages/show-details/show-details.module";
import {AuthModule} from "./pages/auth/auth.module";
import {UserProfileModule} from "./pages/user-profile/user-profile.module";
import {EpisodeDetailsModule} from "./pages/episode-details/episode-details.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    AuthModule,
    UserProfileModule,
    ShowDetailsModule,
    EpisodeDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
