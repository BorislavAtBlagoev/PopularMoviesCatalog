import { Component, OnInit } from '@angular/core';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows!: ITvShow[]

  constructor(private tvShowsService: TvShowsService) {
    tvShowsService.tvShows(1).subscribe(response => {
      this.tvShows = response.results;
    })
  }

  ngOnInit(): void {
  }

}
