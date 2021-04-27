import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movies';
import { MoviesService } from '../../../services/movies/movies.service'

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movie!: IMovie
  routerParameterMovieId!: number;

  constructor(private activatedRoute: ActivatedRoute, moviesService: MoviesService) {
    this.routerParameterMovieId = activatedRoute.snapshot.params.id
    moviesService
      .movie(this.routerParameterMovieId)
      .subscribe(response => {
        this.movie = response;
      })
  }

  ngOnInit(): void {
  }

}
