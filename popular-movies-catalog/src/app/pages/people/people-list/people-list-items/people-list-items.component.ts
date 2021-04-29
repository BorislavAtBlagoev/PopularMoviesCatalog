import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeople } from 'src/app/interfaces/people';
import { isMovie } from '../../../../interfaces/shared';

@Component({
  selector: 'app-people-list-items',
  templateUrl: './people-list-items.component.html',
  styleUrls: ['./people-list-items.component.scss']
})
export class PeopleListItemsComponent {

  @Input() person!: IPeople;

  constructor(private router: Router) { }

  formattingPersonKnowsFor() {
    return this.person?.known_for
      .map(item => {
        return isMovie(item) ? item.name : item.title;
      })
      .join(', ');
  }

  redirect() {
    this.router.navigate(['/people', this.person.id]);
  }

}
