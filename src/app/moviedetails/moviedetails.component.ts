import { Genres } from './../genres';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
movieDetail:any= {};

  id:string= '';
   imagePrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieService:MovieService ) {
   this.id =  this._ActivatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this._MovieService.getMovieDetails(this.id).subscribe((response)=>
    {
      this.movieDetail = response;     
      console.log(this.movieDetail);
      
    })
  }

}
