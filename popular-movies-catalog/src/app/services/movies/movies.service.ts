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
  // private BASE_URL = 'https://api.themoviedb.org/3';
  // private API_KEY = '6b585f80d3e77bdad77eb51bfaaf2baa';

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

  // private buildUrl(endpoint: string, params?: IFilterSettings): string {
  //   const queryParams = params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : '';

  //   return `${this.BASE_URL}/${endpoint}?api_key=${this.API_KEY}&${queryParams}`;
  // }
}
