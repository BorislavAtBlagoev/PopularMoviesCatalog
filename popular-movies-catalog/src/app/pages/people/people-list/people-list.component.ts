import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFilterSettings } from 'src/app/interfaces/movies';
import { IPeople } from 'src/app/interfaces/people';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { PeopleService } from '../../../services/people/people.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as personAction from '../../../store/people/person.actions';
import { selectPerson } from 'src/app/store/people/person.selectors';
import { IPeopleState } from 'src/app/store/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // people!: IPeople[];
  people$: Observable<IPeople[]>;
  personName = new FormControl('');
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private peopleService: PeopleService, private store: Store<IPeopleState>) {
    // peopleService
    //   .people(this.filterSettings)
    //   .subscribe(response => {
    //     this.people = response.results;
    //   })
  }
  ngOnInit(): void {
    this.store.dispatch(personAction.LoadPeople({ filters: this.filterSettings }));
    this.people$ = this.store.pipe(select(selectPerson));
    console.log(this.people$)
  }
}
