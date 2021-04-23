import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeople } from 'src/app/interfaces/people';

@Component({
  selector: 'app-people-list-items',
  templateUrl: './people-list-items.component.html',
  styleUrls: ['./people-list-items.component.scss']
})
export class PeopleListItemsComponent {

  @Input() person!: IPeople;

  constructor(private router: Router) { }

  listActorsMovies() {
    return this.person?.known_for.map(x => x.title).join(', ');
  }

  redirect() {
    this.router.navigate(['/people', this.person.id]);
  }

}
