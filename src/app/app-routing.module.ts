import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' ,  canActivate:[AuthGuard], component:HomeComponent},
  {path:'about' , canActivate:[AuthGuard], component:AboutComponent},
  {path:'gallery' , canActivate:[AuthGuard], component:GalleryComponent},
  {path:'contacts' , canActivate:[AuthGuard], component:ContactsComponent},
  {path:'login' ,component:LogInComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'tv' , canActivate:[AuthGuard], component:TvComponent},
  {path:'people' , canActivate:[AuthGuard], component:PeopleComponent},
  {path:'moviedetails/:id' ,  canActivate:[AuthGuard], component:MoviedetailsComponent},





  {path:'**' ,component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
