import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFilterSettings } from 'src/app/interfaces/movies';
import { IPeople } from 'src/app/interfaces/people';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as personAction from '../../../store/people/person.actions';
import { selectPeople, selectTotalPages } from 'src/app/store/people/person.selectors';
import { IPeopleState } from 'src/app/store/people';
import { generatePages, pageValidations } from '../../../utils/pagination';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people$: Observable<IPeople[]>;
  totalPages$: Observable<number>;
  totalPages: number[];
  personName = new FormControl('');
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private store: Store<IPeopleState>) { }

  ngOnInit(): void {
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPeople));
    this.totalPages$ = this.store.pipe(select(selectTotalPages));
    this.totalPages$
      .subscribe(pages => {
        this.totalPages = generatePages(pages);
      });
  }

  onMovePageWithOne(page: number) {
    let newPage = parseInt(this.filterSettings.page) + page;
    if (pageValidations(this.totalPages.length, newPage)) {
      this.filterSettings = { ...this.filterSettings, page: newPage.toString() };
      this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    }
  }

  onMoveToConcretePage(page: number) {
    this.filterSettings = { ...this.filterSettings, page: page.toString() };
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
  }
}
