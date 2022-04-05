import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup , FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { 

    
  }
error:string='';
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^[A-Z][a-z0-9A-Z]{7,20}/)])
  })

  authen(loginInfo:FormGroup){
   return this._AuthService.sendLogin(loginInfo.value).subscribe(
     (response)=>{
      if (response.message =="success"){
        localStorage.setItem("userToken" , response.token)
        this._AuthService.setUserData();
        this._Router.navigate(['/home'])
      }
      else{
       this.error = response.message;
      }
     }
    
     
   )
    
  }
  ngOnInit(): void {
  }

  

}
