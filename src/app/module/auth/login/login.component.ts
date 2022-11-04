import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/identity/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errors: string = '';
  LoginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}

  loginFormData(LoginForm: FormGroup) {
    this._AuthService.Login(this.LoginForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('userToken', res.authorisation.token);
        this._AuthService.isLogin = true;
    
      },
      error: (e) => {
        this.errors = e.error.message;
        if(e.error.message == "Unauthorized")
          this._AuthService.isLogin = false;
        

         this._Router.navigate(['/register']);

      },
      complete: () => {
     
        this._Router.navigate(['/home-page']);
        
      },
    });
  }
}
