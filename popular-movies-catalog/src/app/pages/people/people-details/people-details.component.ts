import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPeople, IPersonCredits } from 'src/app/interfaces/people';
import { ICombinedCreditsResponse } from 'src/app/interfaces/responses';
import { PeopleService } from 'src/app/services/people/people.service';
import { IPersonState } from 'src/app/store/people-details';
import { selectPerson } from 'src/app/store/people-details/person-details.selectors';
import { ICombinedCreditsState } from 'src/app/store/person-credits';
import { selectPersonCastCredits, selectPersonCredits, selectPersonCrewCredits } from 'src/app/store/person-credits/person-credits.selectors';
import * as personDetailsActions from '../../../store/people-details/person-details.actions';
import * as personCreditsActions from '../../../store/person-credits/person-credits.actions';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  person$: Observable<IPeople>;
  personCastCredits$: Observable<IPersonCredits[]>;
  personCrewCredits$: Observable<IPersonCredits[]>;
  routerParameterPersonId: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router,
    private store: Store<IPersonState>,
    private personCreditsStore: Store<ICombinedCreditsState>
  ) {
    this.routerParameterPersonId = activeRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.routerParameterPersonId = this.activeRoute.snapshot.params.id;
    this.store.dispatch(personDetailsActions.LoadPerson({ personId: this.routerParameterPersonId }));
    this.person$ = this.store.pipe(select(selectPerson));

    this.personCreditsStore.dispatch(personCreditsActions.LoadPersonCredits({ personId: this.routerParameterPersonId }));
    this.personCastCredits$ = this.personCreditsStore.pipe(select(selectPersonCastCredits));
    this.personCrewCredits$ = this.personCreditsStore.pipe(select(selectPersonCrewCredits));
  }

  redirectToMedia(cast: IPersonCredits) {
    const route = cast.media_type === 'movie' ? '/movies' : '/tv-shows';
    this.router.navigate([route, cast.id])
  }

}
