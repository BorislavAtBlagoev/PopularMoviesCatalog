import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFilteringOption } from 'src/app/interfaces/movies';
import { ITvShow, ITvShowsFilterSettings } from 'src/app/interfaces/tvShows';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { ITvShowsState } from 'src/app/store/tvShows';
import { selectTvShow } from 'src/app/store/tvShows/tvShow.selectors';
import * as tvShowActions from '../../../store/tvShows/tvShow.actions';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows$: Observable<ITvShow[]>;
  tvShowName = new FormControl('');
  filterSettings: ITvShowsFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    first_air_date_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private store: Store<ITvShowsState>) { }

  ngOnInit(): void {
    this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
    this.tvShows$ = this.store.pipe(select(selectTvShow));
  }

  onTvShowNameChanged(name: string) {
    this.tvShowName.setValue(name);
  }

  onSortByChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, sort_by: options.value.toString() };
    this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
  }

  onYearChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, first_air_date_year: options.value.toString() };
    this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
  }

  onGenreChanged(options: IFilteringOption) {
    this.filterSettings = { ...this.filterSettings, with_genres: options.value.toString() };
    this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
  }
}
