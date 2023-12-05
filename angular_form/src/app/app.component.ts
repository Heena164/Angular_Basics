import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form and Toggle';
  userData:any={};
  display=false;

  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data
  }
  toggle()
  {
    this.display =! this.display;
  }
}
