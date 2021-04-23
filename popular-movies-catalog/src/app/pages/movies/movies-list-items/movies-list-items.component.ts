import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  @Input() movie!: IMovie;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }

}
