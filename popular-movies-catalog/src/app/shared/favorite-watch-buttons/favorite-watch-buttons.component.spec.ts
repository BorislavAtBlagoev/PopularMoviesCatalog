import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWatchButtonsComponent } from './favorite-watch-buttons.component';

describe('FavoriteWatchButtonsComponent', () => {
  let component: FavoriteWatchButtonsComponent;
  let fixture: ComponentFixture<FavoriteWatchButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWatchButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteWatchButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
