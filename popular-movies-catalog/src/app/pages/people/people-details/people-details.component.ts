import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeople } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {

  person!: IPeople;
  routerParameterPersonId!: number;

  constructor(private activeRoute: ActivatedRoute, peopleService: PeopleService) {
    this.routerParameterPersonId = activeRoute.snapshot.params.id;

    peopleService.person(this.routerParameterPersonId).subscribe(response => {
      this.person = response;
    })
  }

}
