import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFilterSettings } from 'src/app/interfaces/movies';
import { IPeople } from 'src/app/interfaces/people';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { PeopleService } from '../../../services/people/people.service';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as personAction from '../../../store/people/person.actions';
import { selectPerson, selectTotalPages } from 'src/app/store/people/person.selectors';
import { IPeopleState } from 'src/app/store/people';
import { IPeopleResponse } from 'src/app/interfaces/responses';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  pages: number[] = [];
  totalPages$: Observable<number>;
  people$: Observable<IPeople[]>;
  personName = new FormControl('');
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private peopleService: PeopleService, private store: Store<IPeopleState>) { }

  private generatePages(totalPages: number) {
    for (let i = 1; i <= totalPages; i++) {
      this.pages.push(i);
    }
  }

  getPreviousPage() {
    let previousPage = parseInt(this.filterSettings.page) - 1;
    this.filterSettings = { ...this.filterSettings, page: previousPage.toString() };
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPerson));
  }

  getNextPage() {
    let nextPage = parseInt(this.filterSettings.page) + 1;
    this.filterSettings = { ...this.filterSettings, page: nextPage.toString() };
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPerson));
  }

  getConcretePage(page: number) {
    this.filterSettings = { ...this.filterSettings, page: page.toString() };
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPerson));
  }

  ngOnInit(): void {
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPerson));
    this.totalPages$ = this.store.pipe(select(selectTotalPages));
    this.totalPages$.subscribe(x => this.generatePages(x));
  }
}
