import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { TvShowsListComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { MoviesListItemsComponent } from './pages/movies/movies-list/movies-list-items/movies-list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDetailsComponent } from './pages/movies/movies-details/movies-details.component';
import { TvShowsListItemsComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list-items/tv-shows-list-items.component';
import { TvShowsDetailsComponent } from './pages/tv-shows/tv-shows-details/tv-shows-details.component';
import { PeopleListItemsComponent } from './pages/people/people-list/people-list-items/people-list-items.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './shared/filters/filters.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthComponent } from './pages/auth/auth.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FavoriteWatchButtonsComponent } from './shared/favorite-watch-buttons/favorite-watch-buttons.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as movieState from './store/movies';
import * as movieDetailsState from './store/movies-details';
import * as tvShowState from './store/tvShows';
import * as tvShowDetailsState from './store/tvShows-details'
import * as peopleState from './store/people';
import * as personDetailsState from './store/people-details';
import * as personCreditsState from './store/person-credits';
import { MovieEffects } from './store/movies/movie.effects';
import { MediaSearchPipe } from './pipes/media-search/media-search.pipe';
import { TvShowEffects } from './store/tvShows/tvShow.effects';
import { PersonEffects } from './store/people/person.effects';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MovieDetailsEffects } from './store/movies-details/movie-details.effects';
import { TvShowDetailsEffects } from './store/tvShows-details/tvShow-details.effects';
import { PersonDetailsEffects } from './store/people-details/person-details.effects';
import { PersonCreditsEffects } from './store/person-credits/person-credits.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesListComponent,
    TvShowsListComponent,
    PeopleListComponent,
    MoviesListItemsComponent,
    MoviesDetailsComponent,
    TvShowsListItemsComponent,
    TvShowsDetailsComponent,
    PeopleListItemsComponent,
    PeopleDetailsComponent,
    FiltersComponent,
    SearchPipe,
    AuthComponent,
    FavoriteWatchButtonsComponent,
    MediaSearchPipe,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.FIREBASE),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(
      movieState.movieStateFeatureKey,
      movieState.reducers,
    ),
    StoreModule.forFeature(
      movieDetailsState.movieDetailsStateFeatureKey,
      movieDetailsState.reducers
    ),
    StoreModule.forFeature(
      tvShowState.tvShowStateFeatureKey,
      tvShowState.reducers
    ),
    StoreModule.forFeature(
      tvShowDetailsState.tvShowDetailsStateFeatureKey,
      tvShowDetailsState.reducers
    ),
    StoreModule.forFeature(
      peopleState.peopleStateFeatureKey,
      peopleState.reducers
    ),
    StoreModule.forFeature(
      personDetailsState.personStateFeatureKey,
      personDetailsState.reducers
    ),
    StoreModule.forFeature(
      personCreditsState.personCreditsStateFeatureKey,
      personCreditsState.reducers
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([MovieEffects]),
    EffectsModule.forFeature([MovieDetailsEffects]),
    EffectsModule.forFeature([TvShowEffects]),
    EffectsModule.forFeature([TvShowDetailsEffects]),
    EffectsModule.forFeature([PersonEffects]),
    EffectsModule.forFeature([PersonDetailsEffects]),
    EffectsModule.forFeature([PersonCreditsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
