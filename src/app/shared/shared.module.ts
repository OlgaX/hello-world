import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PopupComponent} from './components/popup/popup.component';
import {StripHtmlPipe} from './pipes/strip-html.pipe';

@NgModule({
  declarations: [
    PopupComponent,
    StripHtmlPipe,
  ],
  exports: [
    PopupComponent,
    StripHtmlPipe,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
