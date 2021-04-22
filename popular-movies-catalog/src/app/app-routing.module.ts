import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './pages/movies/movies-details/movies-details.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { TvShowsListComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list.component';

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
    path: 'people',
    component: PeopleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
