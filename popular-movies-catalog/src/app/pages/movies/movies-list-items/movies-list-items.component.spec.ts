import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListItemsComponent } from './movies-list-items.component';

describe('MoviesListItemsComponent', () => {
  let component: MoviesListItemsComponent;
  let fixture: ComponentFixture<MoviesListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
