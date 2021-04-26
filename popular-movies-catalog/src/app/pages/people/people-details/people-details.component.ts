import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPeople, IPersonCredits } from 'src/app/interfaces/people';
import { ICombinedCreditsResponse } from 'src/app/interfaces/responses';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {

  person!: IPeople;
  personCredits: {
    cast: IPersonCredits[];
    crew: IPersonCredits[];
  } = {
      cast: [],
      crew: []
    }
  routerParameterPersonId!: number;

  constructor(private activeRoute: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    this.routerParameterPersonId = activeRoute.snapshot.params.id;

    peopleService
      .person(this.routerParameterPersonId)
      .subscribe(response => {
        this.person = response;
      })

    peopleService
      .personCredits(this.routerParameterPersonId)
      .subscribe(response => {
        this.personCredits = {
          cast: response.cast,
          crew: response.crew
        }
      })
  }

  redirectToMedia(cast: IPersonCredits) {
    const route = cast.media_type === 'movie' ? '/movies' : '/tv-shows';
    this.router.navigate([route, cast.id])
  }

}
