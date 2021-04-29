import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFilteringOption, IFilterSettings, IMovie } from 'src/app/interfaces/movies';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { IMoviesState } from 'src/app/store/movies';
import { selectMovie } from 'src/app/store/movies/movie.selectors';
import * as movieActions from '../../../store/movies/movie.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies$: Observable<IMovie[]>;
  movieName = new FormControl('');
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private store: Store<IMoviesState>) { }

  ngOnInit(): void {
    this.store.dispatch(movieActions.LoadMovies({ filters: this.filterSettings }));
    this.movies$ = this.store.pipe(select(selectMovie));
  }

  onTitleChange(title: string) {
    this.movieName.setValue(title);
  }

  onSortByChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, sort_by: options.value.toString() };
    this.store.dispatch(movieActions.LoadMovies({ filters: this.filterSettings }));
  }

  onYearChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, primary_release_year: options.value.toString() }
    this.store.dispatch(movieActions.LoadMovies({ filters: this.filterSettings }));
  }

  onGenreChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, with_genres: options.value.toString() }
    this.store.dispatch(movieActions.LoadMovies({ filters: this.filterSettings }));
  }
}
