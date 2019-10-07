import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showSearchBar: boolean;
  title = 'hello-world (test deploy with tag 0.0.0)';
}
