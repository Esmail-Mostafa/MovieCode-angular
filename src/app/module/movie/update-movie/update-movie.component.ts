import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/service/moviesService/movies.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss'],
})
export class UpdateMovieComponent implements OnInit {
  moviecat: any;
  errors: string = '';
  show: any;
  id:number = this._ActivatedRoute.snapshot.params['id'];
  image: any;

  updateData = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    category_id: new FormControl(null),
  });
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.getMovieInfo();
    this.getMoviecat();
  }

  getMovieInfo() {
    this._MoviesService.showId(this.id).subscribe((res: any) => {
      this.show = res.message;
    });
  }

  // updateData

  getImage(event: any) {
    this.image = event.target.files[0];
  }

  PatchData() {
    const moviesDetalis = this.updateData.value;
    const formdata = new FormData();
    formdata.append('image',  this.image || this.show.image);
    formdata.append('name', moviesDetalis.name || this.show.name);
    formdata.append(
      'description',
     moviesDetalis.description || this.show.description );
    formdata.append(
      'category_id',
      moviesDetalis.category_id || this.show.category_id
    );
    formdata.append('_method', 'put');
    this._MoviesService.updateMovieData(this.id, formdata).subscribe({

      next: (res) => {},
      error: (e) => {

        this.errors = e.error.message;
      },
      complete: () => {
        this._Router.navigate(['/home-page']);
      },
    });
  }

  getMoviecat() {
    this._MoviesService.getcat().subscribe((res: any) => {
      this.moviecat = res.message;
    });
  }
}
