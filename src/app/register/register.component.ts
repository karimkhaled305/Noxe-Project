import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  error:string='';
  registerForm:FormGroup= new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(9) ,]),
    last_name:new FormControl(null ,  [Validators.required , Validators.minLength(3) , Validators.maxLength(9) ,]),
    age:new FormControl(null ,  [Validators.required , Validators.min(10) , Validators.max(90) ,]),
   email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern(/^[A-Z][a-z0-9A-Z]{7,20}/)]),


  })
  submitForm(formInfo:FormGroup){ 
   this._AuthService.sendData(formInfo.value).subscribe(
     (response)=>{
      if (response.message == 'success'){
       this._Router.navigate(['/login'])

      }
       
        
        else
          this.error = 'email is already registered'
        
       
     }
   )
  }

  ngOnInit(): void {
  }

}
