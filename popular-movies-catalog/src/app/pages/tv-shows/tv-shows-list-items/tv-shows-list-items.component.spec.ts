import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsListItemsComponent } from './tv-shows-list-items.component';

describe('TvShowsListItemsComponent', () => {
  let component: TvShowsListItemsComponent;
  let fixture: ComponentFixture<TvShowsListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
