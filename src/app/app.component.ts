import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';


  constructor(private _AuthService:AuthService){
    _AuthService.userData.subscribe(()=>{

      if(_AuthService.userData.getValue() != null){
        setTimeout(()=>{_AuthService.logOut()}, 5000000)
        } 


    })
   
  }
}
