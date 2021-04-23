import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilteringOption, IGenre, IMovie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  @Input() movie!: IMovie;
  filterByGenreList: IFilteringOption[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // generateGenres() {
  //   this.httpClient
  //     .get<IGenre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=6b585f80d3e77bdad77eb51bfaaf2baa')
  //     .subscribe(response => {
  //       response.forEach(genre => {
  //         this.filterByGenreList.push({
  //           label: genre.name,
  //           value: genre.id
  //         })
  //       });
  //     })
  // }

  redirect() {
    this.router.navigate(['/movies', this.movie.id]);
  }

}
