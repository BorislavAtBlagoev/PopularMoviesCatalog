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

  filterByGenreList: IFilteringOption[] = [];

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }

  ngOnInit(): void {
  }
}
