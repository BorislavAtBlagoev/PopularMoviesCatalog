import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFilteringOption } from 'src/app/interfaces/movies';
import { MoviesService } from '../../services/movies/movies.service';
import { generateYearSortingOptions, MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() sortByChanged: EventEmitter<IFilteringOption> = new EventEmitter<IFilteringOption>();
  @Output() yearChanged: EventEmitter<IFilteringOption> = new EventEmitter<IFilteringOption>();
  @Output() genreChanged: EventEmitter<IFilteringOption> = new EventEmitter<IFilteringOption>();
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();

  filterFromGroup!: FormGroup;
  sortOptions: IFilteringOption[] = MMMC_SORTING_OPTIONS;
  filterByYearYearOptions: IFilteringOption[] = generateYearSortingOptions();
  filterByGenreOptions: IFilteringOption[] = [{
    label: 'All',
    value: ''
  }];

  constructor(private movieService: MoviesService) {
    this.filterFromGroup = new FormGroup({
      sortBy: new FormControl(this.sortOptions[0]),
      year: new FormControl(this.filterByYearYearOptions[0]),
      genre: new FormControl(this.filterByGenreOptions[0]),
      movieName: new FormControl('')
    });

    movieService
      .genres()
      .subscribe(response => {
        response.genres.forEach(genre => {
          this.filterByGenreOptions.push({
            label: genre.name,
            value: genre.id
          })
        })
      })
  }

  ngOnInit(): void {
    this.filterFromGroup
      .get('sortBy')
      ?.valueChanges
      .subscribe((option: IFilteringOption) => {
        this.sortByChanged.emit(option);
      })

    this.filterFromGroup
      .get('year')
      ?.valueChanges
      .subscribe((option: IFilteringOption) => {
        this.yearChanged.emit(option);
      })

    this.filterFromGroup
      .get('genre')
      ?.valueChanges
      .subscribe((option: IFilteringOption) => {
        this.genreChanged.emit(option);
      })

    this.filterFromGroup
      .get('movieName')
      ?.valueChanges
      .subscribe((searchTerm: string) => {
        this.titleChanged.emit(searchTerm);
      })
  }

}
