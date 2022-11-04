
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin = false;
  baseUrl:string ="https://test-api.storexweb.com/";
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}

  register(regsiterForm: FormGroup): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + 'api/register',
      regsiterForm
    );
  }

  Login(LoginForm: FormGroup): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'api/login', LoginForm);
  }

  checkIslogIn() {
    return !!localStorage.getItem('userToken');
  }
}
