import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMovie } from 'src/app/interfaces/movies';
import { ITvShow } from 'src/app/interfaces/tvShows';
import { IFirestormMedia } from 'src/app/interfaces/firebaseStorage';
import { isMovie } from 'src/app/interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataStorageService {

  constructor(
    private httpClient: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    private angularFirestore: AngularFirestore
  ) { }

  addToWatchList(media: IMovie | ITvShow, firebaseUserId: string, callback: (error?: any) => void) {
    const mediaDetails: IFirestormMedia = {
      id: media.id,
      title: isMovie(media) ? media.name : media.title,
      posterPath: media.poster_path,
      mediaType: isMovie(media) ? 'tv' : 'movie',
      isWatched: false,
      createdAt: new Date()
    }

    this.angularFirestore
      .doc(`Lists/${firebaseUserId}`)
      .collection<IFirestormMedia[]>('WatchList')
      .doc<IFirestormMedia>(`${mediaDetails.id}`)
      .set(mediaDetails)
      .then(() => callback())
      .catch(error => callback(error));
  }

  addToFavoriteList(media: IMovie | ITvShow, firebaseUserId: string, callback: (error?: any) => void) {
    const mediaDetails: IFirestormMedia = {
      id: media.id,
      title: isMovie(media) ? media.name : media.title,
      posterPath: media.poster_path,
      mediaType: isMovie(media) ? 'tv' : 'movie',
      isWatched: true,
      createdAt: new Date()
    }

    this.angularFirestore
      .doc(`Lists/${firebaseUserId}`)
      .collection<IFirestormMedia[]>('FavoriteList')
      .doc<IFirestormMedia>(`${mediaDetails.id}`)
      .set(mediaDetails)
      .then(() => callback())
      .catch(error => callback(error));
  }
}
