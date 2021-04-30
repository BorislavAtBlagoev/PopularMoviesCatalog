import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {


  @Input() totalPages: number[];
  @Output() movePageWithOne: EventEmitter<number> = new EventEmitter<number>();
  @Output() goToConcretePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  moveToPreviousPage() {
    const previousPage = -1;
    this.movePageWithOne.emit(previousPage);
  }

  moveToNextPage() {
    const nextPage = 1;
    this.movePageWithOne.emit(nextPage);
  }

  moveToConcretePage(page: number) {
    this.goToConcretePage.emit(page);
  }
}
