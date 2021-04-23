import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './pages/movies/movies-details/movies-details.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { TvShowsListComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list.component';
import { TvShowsDetailsComponent } from './pages/tv-shows/tv-shows-details/tv-shows-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MoviesDetailsComponent
  },
  {
    path: 'tv-shows',
    component: TvShowsListComponent
  },
  {
    path: 'tv-shows/:id',
    component: TvShowsDetailsComponent
  },
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'people/:id',
    component: PeopleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
