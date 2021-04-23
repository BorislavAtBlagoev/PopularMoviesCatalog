import { Component, OnInit } from '@angular/core';
import { IFilterSettings } from 'src/app/interfaces/movies';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows!: ITvShow[]
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(private tvShowsService: TvShowsService) {
    tvShowsService
      .tvShows(this.filterSettings)
      .subscribe(response => {
        this.tvShows = response.results;
      })
  }

  ngOnInit(): void {
  }

}
