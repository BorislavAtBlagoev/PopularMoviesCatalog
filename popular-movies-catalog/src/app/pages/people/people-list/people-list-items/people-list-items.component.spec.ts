import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListItemsComponent } from './people-list-items.component';

describe('PeopleListItemsComponent', () => {
  let component: PeopleListItemsComponent;
  let fixture: ComponentFixture<PeopleListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
