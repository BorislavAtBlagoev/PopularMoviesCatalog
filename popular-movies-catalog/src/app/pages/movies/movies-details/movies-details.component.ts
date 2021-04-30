import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IMovie } from 'src/app/interfaces/movies';
import { IMovieState } from 'src/app/store/movies-details';
import { selectMovie } from 'src/app/store/movies-details/movie-details.selector';
import * as movieDetailsAction from '../../../store/movies-details/movie-details.action';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movie$: Observable<IMovie>;
  routerParameterMovieId: number;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<IMovieState>) { }

  ngOnInit(): void {
    this.routerParameterMovieId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(movieDetailsAction.LoadMovie({ movieId: this.routerParameterMovieId }));
    this.movie$ = this.store.pipe(select(selectMovie));
  }
}
