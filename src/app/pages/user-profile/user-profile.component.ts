import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../services/auth.service";
import {IUserProfile} from "../../models";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public profile: IUserProfile;

  constructor(private _auth: AuthService) { }

  public ngOnInit(): void {
    this._auth.handleAuthCallback();
    this._getUserProfile();
  }

  private _getUserProfile(): void {
    this._auth.userProfile$.subscribe((data:IUserProfile) => this.profile = data);
  }
}
