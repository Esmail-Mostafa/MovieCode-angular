import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/identity/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errors: string = '';
  regsiterForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),

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

  registerData(regsiterForm: FormGroup) {
    this._AuthService.register(this.regsiterForm.value).subscribe({
      next: (res) => {},
      error: (e) => {
        this.errors = e.error.message;
        this._AuthService.isLogin = false;
      },
      complete: () => {
        this._Router.navigate(['/login']);
      },
    });
  }
}
