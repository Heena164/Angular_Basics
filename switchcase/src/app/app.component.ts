import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'SwitchCase';
  color='abc';
  title2 = 'ForLoop';
  users = ['Anam', 'Nawaz', 'Rashida']
  userDetails = [
    {name:'Anam', email:'anam@gmail.com', phone: '88'},
    {name:'Nawaz', email:'nawaz@gmail.com', phone: '88'},
    {name:'Rashida', email:'rashida@gmail.com', phone: '88'},

  ];
  title3 = 'NestedLoop';
  user = [
    {name:'Anam', phone: '88'},
    {name:'Nawaz', phone: '80'},
    {name:'Rashida', phone: '99'},

  ];

}
 