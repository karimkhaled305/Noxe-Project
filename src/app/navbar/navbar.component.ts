import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
firstName:string= '';
  isLogin:boolean= false;
  constructor(private _AuthService:AuthService) { }
 
  callLogout(){
    this._AuthService.logOut();
  }

  ngOnInit(): void {
    
    this._AuthService.userData.subscribe((response:any)=>{
      if (this._AuthService.userData.getValue() != null){
        this.isLogin = true;
        this.firstName = response.first_name;
            
      }
      else {
        this.isLogin = false;
      }
    })
  }

}
