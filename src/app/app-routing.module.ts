import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './module/auth/login/login.component';
import { RegisterComponent } from './module/auth/register/register.component';
import { CreateMovieComponent } from './module/movie/create-movie/create-movie.component';
import { HomePageComponent } from './module/movie/home-page/home-page.component';
import { MovieDetalisComponent } from './module/movie/movie-detalis/movie-detalis.component';
import { UpdateMovieComponent } from './module/movie/update-movie/update-movie.component';

const routes: Routes = [
  { path: '', redirectTo: "home-page", pathMatch: "full" },
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home-page", canActivate:[AuthGuard],component:HomePageComponent},
  {path:"create-movie", canActivate:[AuthGuard],component:CreateMovieComponent},
  {path:"updateMovie/:id", canActivate:[AuthGuard],component:UpdateMovieComponent},
  {path:"movie-detalis/:id", canActivate:[AuthGuard],component:MovieDetalisComponent},

  
  // {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
