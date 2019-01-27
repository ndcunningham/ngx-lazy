import { Component } from '@angular/core';

@Component({
  selector: 'ngx-lazy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  source =
    ' https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png';
  items = new Array(40);
}
