import {Component, OnInit, Input} from '@angular/core';

import {INavigation} from "../../models";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('navigation') public navigation: INavigation[];

  constructor(public auth: AuthService) {
    this.navigation = [
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'FAQ',
        url: '/faq',
      },
    ];
  }

  public ngOnInit(): void {
  }

}
