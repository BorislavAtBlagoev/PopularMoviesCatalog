import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.scss']
})
export class TvShowsDetailsComponent implements OnInit {

  tvShow!: ITvShow;
  routerParameterTvShowId!: number;

  constructor(private activeRoute: ActivatedRoute, tvShowsService: TvShowsService) {
    this.routerParameterTvShowId = activeRoute.snapshot.params.id;
    tvShowsService.tvShow(this.routerParameterTvShowId).subscribe(response => {
      this.tvShow = response;
    })
  }

  ngOnInit(): void {
  }

}
