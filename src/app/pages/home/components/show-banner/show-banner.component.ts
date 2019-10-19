import {Component, Input} from '@angular/core';

import {ShowDetails} from "../../../../models";

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.scss']
})
export class ShowBannerComponent {

  @Input('data') public data: ShowDetails;

}
