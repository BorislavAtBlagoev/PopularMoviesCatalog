import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './pages/movies/movies-details/movies-details.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { TvShowsListComponent } from './pages/tv-shows/tv-shows-list/tv-shows-list.component';
import { TvShowsDetailsComponent } from './pages/tv-shows/tv-shows-details/tv-shows-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies',
    component: MoviesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    component: MoviesDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tv-shows',
    component: TvShowsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tv-shows/:id',
    component: TvShowsDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people',
    component: PeopleListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people/:id',
    component: PeopleDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
