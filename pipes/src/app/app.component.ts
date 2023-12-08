import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipes';
  today = Date();

// With using pipe  
  capString(item:string)
  {
    return item.toUpperCase();
  }
  user={
    name:'Sam',
    age:22
  }
}
