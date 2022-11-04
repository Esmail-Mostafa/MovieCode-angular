import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { Imovies } from 'src/app/Models/imovies';
import { AuthService } from 'src/app/service/identity/auth.service';
import { MoviesService } from 'src/app/service/moviesService/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  all: boolean = true;
  catmovie: Category[] = [];
  isShow: boolean = false;
  error: string = '';
  movieList: Imovies[] = [];

  constructor(
    private _MoviesService: MoviesService,
    private _AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.listOfMovie();
    this.getMovieCategory();
  }
  listOfMovie() {
    this._MoviesService.listOfMovie().subscribe({
      next: (res) => {
        this._AuthService.isLogin = true;
        this.movieList = res.message;
      },
      error: (e) => {
        this.error = e.error.message;
      },
      complete: () => (this.isShow = true),
    });
  }

  DeleteMovies(id: any) {
    this._MoviesService.delete(id).subscribe(() => {
      this.isShow = false;
      this.listOfMovie();
    });
  }
  getMovieCategory() {
    this._MoviesService.getcat().subscribe((res) => {
      this.catmovie = res.message;
    });
  }

  detectChanges(event: any) {
    let val = event.target.value;
    val == 'all' ? this.listOfMovie() : this.getMoviesByCategory(val);
  }

  getMoviesByCategory(val: number) {
    this._MoviesService.moviesByCategory(val).subscribe((res) => {
      this.movieList = res.message;
    });
  }
}
