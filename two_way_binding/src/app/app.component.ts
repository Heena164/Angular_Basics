import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two Way Binding';
  title1 = 'Template Reference Variable'
  name:any;

  getVal(item:any)
  {
    console.warn(item)
  }
}
