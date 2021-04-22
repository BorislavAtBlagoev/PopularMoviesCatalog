import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDiscoverResponse } from 'src/app/interfaces/responses';
import { IMovie } from 'src/app/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private BASE_URL = 'https://api.themoviedb.org/3';
  private API_KEY = '6b585f80d3e77bdad77eb51bfaaf2baa';

  constructor(private httpClient: HttpClient) { }

  discover(pageNumber: number): Observable<IDiscoverResponse> {
    return this.httpClient
      .get<IDiscoverResponse>(`${this.BASE_URL}/discover/movie?page=${pageNumber}&api_key=${this.API_KEY}`);
  }

  movie(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`)
  }
}
