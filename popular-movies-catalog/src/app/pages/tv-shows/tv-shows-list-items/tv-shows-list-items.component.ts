import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITvShow } from 'src/app/interfaces/tvShows';

@Component({
  selector: 'app-tv-shows-list-items',
  templateUrl: './tv-shows-list-items.component.html',
  styleUrls: ['./tv-shows-list-items.component.scss']
})
export class TvShowsListItemsComponent {

  @Input() tvShow!: ITvShow;

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['/tv-shows', this.tvShow.id]);
  }

}
