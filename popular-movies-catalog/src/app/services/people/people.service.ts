import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPeopleResponse } from 'src/app/interfaces/responses';
import { IPeople } from 'src/app/interfaces/people';
import { url } from '../../utils/UrlBuilder';
import { IFilterSettings } from 'src/app/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private httpClient: HttpClient) { }

  people(params: IFilterSettings): Observable<IPeopleResponse> {
    return this.httpClient
      .get<IPeopleResponse>(url.buildUrl('person/popular', params));
  }

  person(id: number): Observable<IPeople> {
    return this.httpClient
      .get<IPeople>(url.buildUrl(`person/${id}`));
  }
}
