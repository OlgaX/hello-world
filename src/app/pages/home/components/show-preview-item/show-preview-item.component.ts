import {Component, Input} from '@angular/core';

import {ShowDetails} from "../../../../models";

@Component({
  selector: 'app-show-preview-item',
  templateUrl: './show-preview-item.component.html',
  styleUrls: ['./show-preview-item.component.scss']
})
export class ShowPreviewItemComponent {
  @Input('data') public data: ShowDetails;
}
