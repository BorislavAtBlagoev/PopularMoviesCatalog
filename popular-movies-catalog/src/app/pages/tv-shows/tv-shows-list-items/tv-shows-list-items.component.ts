import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ITvShow } from 'src/app/interfaces/tvShows';

@Component({
  selector: 'app-tv-shows-list-items',
  templateUrl: './tv-shows-list-items.component.html',
  styleUrls: ['./tv-shows-list-items.component.scss']
})
export class TvShowsListItemsComponent {

  @Input() tvShow!: ITvShow;
  @Output() addedToWatchList: EventEmitter<ITvShow> = new EventEmitter<ITvShow>();
  @Output() addedToFavoriteList: EventEmitter<ITvShow> = new EventEmitter<ITvShow>();

  constructor(private router: Router) { }

  addToWatchList() {
    this.addedToWatchList.emit(this.tvShow);
  }

  addToFavoriteList() {
    this.addedToFavoriteList.emit(this.tvShow);
  }

  redirect() {
    this.router.navigate(['/tv-shows', this.tvShow.id]);
  }

}
