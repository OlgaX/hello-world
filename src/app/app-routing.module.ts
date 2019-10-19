import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from "./guards/auth.guard";
import {AuthComponent} from "./pages/auth/auth.component";
import {HomeComponent} from "./pages/home/home.component";
import {ShowDetailsComponent} from "./pages/show-details/show-details.component";
import {EpisodeDetailsComponent} from "./pages/episode-details/episode-details.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shows/:id',
    component: ShowDetailsComponent,
    children: [
      {
        path: 'episode/:id',
        component: EpisodeDetailsComponent,
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
