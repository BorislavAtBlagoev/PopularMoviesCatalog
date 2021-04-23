import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvShowsResponse } from 'src/app/interfaces/responses';
import { ITvShow } from 'src/app/interfaces/tvShows';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  private BASE_URL = 'https://api.themoviedb.org/3';
  private API_KEY = '6b585f80d3e77bdad77eb51bfaaf2baa';

  constructor(private httpClient: HttpClient) { }

  tvShows(pageNumber: number): Observable<ITvShowsResponse> {
    return this.httpClient.get<ITvShowsResponse>(`${this.BASE_URL}/tv/popular?page=${pageNumber}&api_key=${this.API_KEY}`);
  }

  tvShow(id: number): Observable<ITvShow> {
    return this.httpClient.get<ITvShow>(`${this.BASE_URL}/tv/${id}?api_key=${this.API_KEY}`);
  }
}
