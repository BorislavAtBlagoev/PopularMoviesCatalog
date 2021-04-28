import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFilteringOption, IFilterSettings, IMovie } from 'src/app/interfaces/movies';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseDataStorageService } from 'src/app/services/firebase-data-storage/firebase-data-storage.service';
import { MMMC_SORTING_OPTIONS } from 'src/app/services/movies/sortingOptions';
import { MoviesService } from '../../../services/movies/movies.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies!: IMovie[];
  movieName!: string;
  filterSettings: IFilterSettings = {
    sort_by: MMMC_SORTING_OPTIONS[0].value,
    primary_release_year: '',
    with_genres: '',
    page: '1'
  }

  constructor(
    private moviesService: MoviesService,
    private firebaseDataStorageService: FirebaseDataStorageService,
    private authService: AuthService
  ) {
    this.moviesService
      .discover(this.filterSettings)
      .subscribe(response => {
        this.movies = response.results;
      })
  }

  searchMovie() {
    return this.movies?.filter(movie => {
      const title = movie.title.toUpperCase();
      const searchTerm = this.movieName?.toUpperCase();

      return title.includes(searchTerm || '');
    });
  }

  onTitleChange(event: string) {
    this.movieName = event;
  }

  onSortByChanged(event: IFilteringOption) {
    this.filterSettings.sort_by = event.value.toString();

    this.moviesService
      .discover(this.filterSettings)
      .subscribe(response => {
        this.movies = response.results;
      })
  }

  onYearChanged(event: IFilteringOption) {
    this.filterSettings.primary_release_year = event.value.toString();

    this.moviesService
      .discover(this.filterSettings)
      .subscribe(response => {
        this.movies = response.results;
      })
  }

  onGenreChanged(event: IFilteringOption) {
    this.filterSettings.with_genres = event.value.toString();

    this.moviesService
      .discover(this.filterSettings)
      .subscribe(response => {
        this.movies = response.results;
      })
  }

  addToWatchList(movie: IMovie) {
    const firebaseUserId = this.getFirebaseUserId();

    if (firebaseUserId) {
      this.firebaseDataStorageService
        .addToWatchList(movie, firebaseUserId, (error) => {
          error ? console.error(error) : console.log('Success!');
        });
    }
  }

  addToFavoriteList(movie: IMovie) {
    const firebaseUserId = this.getFirebaseUserId();

    if (firebaseUserId) {
      this.firebaseDataStorageService
        .addToFavoriteList(movie, firebaseUserId, (error) => {
          error ? console.error(error) : console.log('Success!');
        });
    }
  }

  private getFirebaseUserId(): string | undefined {
    return this.authService.user.uid;
  }

  ngOnInit(): void {
  }

}
