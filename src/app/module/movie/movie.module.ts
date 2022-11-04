import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { RouterModule } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


@NgModule({
  declarations: [
    HomePageComponent,
    MovieDetalisComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class MovieModule { }
