import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/moviesService/movies.service';

@Component({
  selector: 'app-movie-detalis',
  templateUrl: './movie-detalis.component.html',
  styleUrls: ['./movie-detalis.component.scss'],
})
export class MovieDetalisComponent implements OnInit {
  id: number = this._ActivatedRoute.snapshot.params['id'];
  show:any
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovieDEltalis(this.id);
  }

  getMovieDEltalis(id:number) {

    this._MoviesService.showId(id).subscribe(data =>{ this.show = data.message
    console.log(this.show)})
  }
}
