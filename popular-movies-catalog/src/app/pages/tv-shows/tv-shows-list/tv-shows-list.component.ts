import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFilteringOption } from 'src/app/interfaces/movies';
import { ITvShow, ITvShowsFilterSettings } from 'src/app/interfaces/tvShows';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { ITvShowsState } from 'src/app/store/tvShows';
import { selectTotalPages, selectTvShows } from 'src/app/store/tvShows/tvShow.selectors';
import { generatePages, pageValidations } from 'src/app/utils/pagination';
import * as tvShowActions from '../../../store/tvShows/tvShow.actions';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows$: Observable<ITvShow[]>;
  totalPages$: Observable<number>;
  totalPages: number[];
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
    this.tvShows$ = this.store.pipe(select(selectTvShows));
    this.totalPages$ = this.store.pipe(select(selectTotalPages));
    this.totalPages$
      .subscribe(pages => {
        this.totalPages = generatePages(pages);
      })
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

  onMovePageWithOne(page: number) {
    let newPage = parseInt(this.filterSettings.page) + page;
    if (pageValidations(this.totalPages.length, newPage)) {
      this.filterSettings = { ...this.filterSettings, page: newPage.toString() };
      this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
    }
  }

  onMoveToConcretePage(page: number) {
    this.filterSettings = { ...this.filterSettings, page: page.toString() };
    this.store.dispatch(tvShowActions.LoadTvShows({ filters: this.filterSettings }));
  }
}
