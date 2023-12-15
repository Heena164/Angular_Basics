import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form';
  title1 = 'Reactive Form'
  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('', [Validators.required, Validators.maxLength(5)]),

  })

  userLogin(item:any)
  {
    console.warn(item)
  }

  // loginUser()
  // {
  //   console.warn(this.loginForm.value)
  // }

  get user()
  {
    return this.loginForm.get('user');
  }

  get password()
  {
    return this.loginForm.get('password')
  }
}
