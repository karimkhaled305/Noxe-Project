import { Router } from '@angular/router';
import { LoginData } from './login-data';
import { RegData } from './reg-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  userData = new BehaviorSubject(null);


  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if (localStorage.getItem("userToken") != null){
      this.setUserData();
    }
  }

  setUserData() :void
  {
      let encodedToken:string = JSON.stringify(localStorage.getItem("userToken"))
      let decodedToken:any =jwtDecode(encodedToken);
      this.userData.next(decodedToken);

  }

  logOut():void
  {
    localStorage.removeItem("userToken")
    this.userData.next(null);
    this._Router.navigate(["login"])

  }
  sendData(regData:RegData):Observable<any>{
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",regData)
  }
  sendLogin(loginData:LoginData):Observable<any>{
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",loginData)
   }
}
