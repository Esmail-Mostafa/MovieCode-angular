import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/service/moviesService/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  image: any;
  error:string = ""
  moviecat: any;
  newMoiveFormData = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    category_id: new FormControl(null),
  });
  constructor(private _MoviesService: MoviesService , private _Router:Router) {}

  ngOnInit(): void {
    this.getMoviecat();
  }

  AddImage(event: any) {
    this.image = event.target.files[0];
  }

  NewMovie() {
    const moviesDetalis = this.newMoiveFormData.value;
    const formdata = new FormData();
    formdata.append('image', this.image, this.image.name);
    formdata.append('name', moviesDetalis.name);
    formdata.append('description', moviesDetalis.description);
    formdata.append('category_id', moviesDetalis.category_id);
    this._MoviesService.createMovie(formdata).subscribe({
      next:(res)=>{
        alert("movie created");
      },
      error:(e)=>{
       this.error = e.error.message;
      },
      complete:()=>{
        this._Router.navigate(['/home-page'])
      },
    });
  }

  getMoviecat() {
    this._MoviesService.getcat().subscribe((res: any) => {
      this.moviecat = res.message;
    });
  }
}

