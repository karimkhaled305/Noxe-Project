import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  imagePrefix:string = 'https://image.tmdb.org/t/p/w500';
  moviesTrending :any[]= [];
  tvTrending:any[] = [];
  peopleTrending:any[] = [];
  constructor(private _MovieService:MovieService) { }

  ngOnInit(): void {
    this._MovieService.trendingMovies('movie').subscribe((response)=>{
      this.moviesTrending = response.results.slice(10);
    })

      this._MovieService.trendingMovies('tv').subscribe((response)=>{
          this.tvTrending = response.results.slice(10);
          console.log(this.tvTrending);

    })
  
    this._MovieService.trendingMovies('person').subscribe((response)=>{
        this.peopleTrending = response.results.slice(10);

  })


  }

  
  
}
