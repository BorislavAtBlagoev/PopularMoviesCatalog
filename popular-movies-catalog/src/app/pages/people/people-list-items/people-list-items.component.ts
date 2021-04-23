import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from 'src/app/interfaces/people';

@Component({
  selector: 'app-people-list-items',
  templateUrl: './people-list-items.component.html',
  styleUrls: ['./people-list-items.component.scss']
})
export class PeopleListItemsComponent {

  @Input() person!: IPeople;

  constructor() { }

}
