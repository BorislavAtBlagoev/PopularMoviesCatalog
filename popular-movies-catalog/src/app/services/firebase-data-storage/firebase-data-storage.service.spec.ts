import { TestBed } from '@angular/core/testing';

import { FirebaseDataStorageService } from './firebase-data-storage.service';

describe('FirebaseDataStorageService', () => {
  let service: FirebaseDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
