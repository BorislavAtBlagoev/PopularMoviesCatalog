import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDiscoverResponse } from 'src/app/interfaces/responses';
import { IFilterSettings, IGenreResponse, IMovie } from 'src/app/interfaces/movies';
import { url } from '../../utils/UrlBuilder';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private httpClient: HttpClient) { }

  discover(params: IFilterSettings): Observable<IDiscoverResponse> {
    return this.httpClient
      .get<IDiscoverResponse>(url.buildUrl('discover/movie', params));
  }

  movie(id: number): Observable<IMovie> {
    return this.httpClient
      .get<IMovie>(url.buildUrl(`movie/${id}`));
  }

  genres(): Observable<IGenreResponse> {
    return this.httpClient
      .get<IGenreResponse>(url.buildUrl(`genre/movie/list`));
  }
}
