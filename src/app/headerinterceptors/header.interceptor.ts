import { Injectable } from '@angular/core';


import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const token = "Bearer "+ localStorage.getItem("userToken") || "" ;
    const addToken = request.clone({
        
      headers:request.headers.set('Authorization' , token) 
      
    })
   
    return next.handle(addToken); 
  }
}
