import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { TvShowsListComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { MoviesListItemsComponent } from './pages/movies/movies-list-items/movies-list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDetailsComponent } from './pages/movies/movies-details/movies-details.component';
import { TvShowsListItemsComponent } from './pages/tv-shows/tv-shows-list-items/tv-shows-list-items.component';
import { TvShowsDetailsComponent } from './pages/tv-shows/tv-shows-details/tv-shows-details.component';
import { PeopleListItemsComponent } from './pages/people/people-list-items/people-list-items.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';

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
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
