import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPeopleResponse } from 'src/app/interfaces/responses';
import { IPeople } from 'src/app/interfaces/people';
// import { IPeople } from 'src/app/interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private BASE_URL = 'https://api.themoviedb.org/3';
  private API_KEY = '6b585f80d3e77bdad77eb51bfaaf2baa';

  constructor(private httpClient: HttpClient) { }

  people(pageNumber: number): Observable<IPeopleResponse> {
    return this.httpClient.get<IPeopleResponse>(`${this.BASE_URL}/person/popular?page=${pageNumber}&api_key=${this.API_KEY}`);
  }

  person(id: number): Observable<IPeople> {
    return this.httpClient.get<IPeople>(`${this.BASE_URL}/person/${id}?api_key=${this.API_KEY}`);
  }
}
