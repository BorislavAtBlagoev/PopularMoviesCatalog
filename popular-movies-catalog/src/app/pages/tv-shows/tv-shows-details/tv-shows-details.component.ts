import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { ITvShowState } from 'src/app/store/tvShows-details';
import { TvShowsService } from '../../../services/tv-shows/tv-shows.service';
import { Observable } from 'rxjs';
import * as tvShowDetailsActions from '../../../store/tvShows-details/tvShow-details.actions';
import { selectTvShow } from 'src/app/store/tvShows-details/tvShow-details.selectors';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.scss']
})
export class TvShowsDetailsComponent implements OnInit {

  tvShow$: Observable<ITvShow>;
  routerParameterTvShowId: number;

  constructor(private activeRoute: ActivatedRoute, private store: Store<ITvShowState>) { }

  ngOnInit(): void {
    this.routerParameterTvShowId = this.activeRoute.snapshot.params.id;
    this.store.dispatch(tvShowDetailsActions.LoadTvShow({ tvShowId: this.routerParameterTvShowId }));
    this.tvShow$ = this.store.pipe(select(selectTvShow));
  }
}
