import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movies';
import { MoviesService } from '../../../services/movies/movies.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies!: IMovie[];
  // pages!: number;
  // page!: number;

  constructor(private moviesService: MoviesService) {
    this.moviesService.discover(1).subscribe(response => {
      this.movies = response.results;
      // this.pages = response.total_pages;
    })
  }

  // nextPage() {
  //   this.page++;
  // }

  // previousPage() {
  //   this.page--;
  // }

  ngOnInit(): void {
  }

}
