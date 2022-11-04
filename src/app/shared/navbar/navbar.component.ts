import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/identity/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public _AuthService:AuthService , private _Router:Router) { 
  

  

  }

  ngOnInit(): void {
    if(localStorage.length){
     this._AuthService.isLogin = true
    }else{
      this._AuthService.isLogin = false

  
    }
  }
   
  isLogOut(){
    localStorage.clear();
   
    this._Router.navigate(['/login']);;
   this.ngOnInit()
  }

}
