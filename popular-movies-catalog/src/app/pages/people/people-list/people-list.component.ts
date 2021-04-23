import { Component, OnInit } from '@angular/core';
import { IFilterSettings } from 'src/app/interfaces/movies';
import { IPeople } from 'src/app/interfaces/people';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { PeopleService } from '../../../services/people/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {

  people!: IPeople[];
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private peopleService: PeopleService) {
    peopleService
      .people(this.filterSettings)
      .subscribe(response => {
        this.people = response.results;
      })
  }
}
