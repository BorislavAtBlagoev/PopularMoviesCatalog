import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/interfaces/people';
import { PeopleService } from '../../../services/people/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {

  people!: IPeople[];

  constructor(private peopleService: PeopleService) {
    peopleService.people(1).subscribe(response => {
      this.people = response.results;

      console.log(response);
    })
  }

}
