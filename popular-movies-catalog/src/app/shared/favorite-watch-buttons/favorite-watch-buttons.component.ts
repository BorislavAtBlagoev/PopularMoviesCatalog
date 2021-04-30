import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movies';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseDataStorageService } from 'src/app/services/firebase-data-storage/firebase-data-storage.service';

@Component({
  selector: 'app-favorite-watch-buttons',
  templateUrl: './favorite-watch-buttons.component.html',
  styleUrls: ['./favorite-watch-buttons.component.scss']
})
export class FavoriteWatchButtonsComponent implements OnInit {

  @Input() media!: IMovie | ITvShow;

  constructor(
    private firebaseDataStorageService: FirebaseDataStorageService,
    private authService: AuthService
  ) { }

  addToWatchList(media: IMovie | ITvShow) {
    const firebaseUserId = this.getFirebaseUserId();

    if (firebaseUserId) {
      this.firebaseDataStorageService
        .addToWatchList(media, firebaseUserId, (error) => {
          error ? console.error(error) : console.log('Success!');
        });
    }
  }

  addToFavoriteList(media: IMovie | ITvShow) {
    const firebaseUserId = this.getFirebaseUserId();

    if (firebaseUserId) {
      this.firebaseDataStorageService
        .addToFavoriteList(media, firebaseUserId, (error) => {
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
