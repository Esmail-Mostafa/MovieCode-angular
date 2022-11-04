
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { messageResponse } from 'src/app/baseResponesInterFace/base-response';
import { Imovies } from 'src/app/Models/imovies';
import { Category } from 'src/app/Models/category';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  baseUrl:string ="https://test-api.storexweb.com/";


  constructor(private _HttpClient: HttpClient) {}

  listOfMovie(): Observable<messageResponse<Imovies>> {
    return this._HttpClient.get<messageResponse<Imovies>>(
      this.baseUrl + 'api/movies'
    );
  }

  createMovie(NewMovie: FormData): Observable<messageResponse<Imovies>> {
    return this._HttpClient.post<messageResponse<Imovies>>(
      this.baseUrl + 'api/movies',
      NewMovie
    );
  }
//get all category 
  getcat(): Observable<messageResponse<Category>> {
    return this._HttpClient.get<messageResponse<Category>>(
      this.baseUrl + 'api/category'
    );
  }
  
  //show movie by id 
  showId(id: Number): Observable<messageResponse<Imovies>> {
    return this._HttpClient.get<messageResponse<Imovies>>(this.baseUrl + `api/movies/${id}`);
  }

  updateMovieData(id: number, data:FormData):Observable<messageResponse<Imovies>> {
    return this._HttpClient.post<messageResponse<Imovies>>(
      this.baseUrl + `api/movies/${id}`,
      data
    );
  }

  delete(id: number): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `api/movies/${id}`, {
      _method: 'delete',
    });
  }


  // HomePage Get movie by categoryId
  moviesByCategory(id: number): Observable<messageResponse<Imovies>> {
    return this._HttpClient.get<messageResponse<Imovies>>(
      this.baseUrl + `api/moviesByCategory/${id}`
    );
  }
}
