import { TestBed } from '@angular/core/testing';

import { Productsvrc } from './productsvrc';

describe('Productsvrc', () => {
  let service: Productsvrc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productsvrc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
