import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvShowsResponse } from 'src/app/interfaces/responses';
import { ITvShow, ITvShowsFilterSettings } from 'src/app/interfaces/tvShows';
import { url } from '../../utils/UrlBuilder';
import { IFilterSettings } from 'src/app/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  constructor(private httpClient: HttpClient) { }

  tvShows(params: ITvShowsFilterSettings): Observable<ITvShowsResponse> {
    console.log(params);
    return this.httpClient
      .get<ITvShowsResponse>(url.buildUrl('discover/tv', params));
  }

  tvShow(id: number): Observable<ITvShow> {
    return this.httpClient
      .get<ITvShow>(url.buildUrl(`tv/${id}`));
  }
}
