import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IFilteringOption, IMovie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  @Input() movie!: IMovie;
  @Output() addedToWatchList: EventEmitter<IMovie> = new EventEmitter<IMovie>();
  @Output() addedToFavoriteList: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  filterByGenreList: IFilteringOption[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addToWatchList() {
    this.addedToWatchList.emit(this.movie);
  }

  addToFavoriteList() {
    this.addedToFavoriteList.emit(this.movie);
  }

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }

}
