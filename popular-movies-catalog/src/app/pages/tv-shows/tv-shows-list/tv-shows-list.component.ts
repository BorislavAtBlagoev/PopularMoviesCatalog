import { Component, OnInit } from '@angular/core';
import { IFilteringOption } from 'src/app/interfaces/movies';
import { ITvShow, ITvShowsFilterSettings } from 'src/app/interfaces/tvShows';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows!: ITvShow[]
  filterSettings: ITvShowsFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    first_air_date_year: '',
    with_genres: '',
    page: '1'
  }
  tvShowName!: string;

  constructor(private tvShowsService: TvShowsService) {
    tvShowsService
      .tvShows(this.filterSettings)
      .subscribe(response => {
        this.tvShows = response.results;
      })
  }

  onSortByChanged(event: IFilteringOption) {
    this.filterSettings.sort_by = event.value.toString();

    this.tvShowsService
      .tvShows(this.filterSettings)
      .subscribe(response => {
        this.tvShows = response.results;
      })
  }

  onYearChanged(event: IFilteringOption) {
    this.filterSettings.first_air_date_year = event.value.toString();

    this.tvShowsService
      .tvShows(this.filterSettings)
      .subscribe(response => {
        this.tvShows = response.results;
      })
  }

  onGenreChanged(event: IFilteringOption) {
    this.filterSettings.with_genres = event.value.toString();

    this.tvShowsService
      .tvShows(this.filterSettings)
      .subscribe(response => {
        this.tvShows = response.results;
      })
  }

  onTvShowNameChanged(event: string) {
    this.tvShowName = event;
  }

  searchTvShowByName() {
    return this.tvShows?.filter(tvShow => {
      const tvShowName = tvShow.name?.toUpperCase();
      const searchTerm = this.tvShowName?.toUpperCase();

      return tvShowName.includes(searchTerm || '');
    })
  }

  ngOnInit(): void {
  }
}
