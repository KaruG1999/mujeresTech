import { TestBed } from '@angular/core/testing';

import { Resourceservice } from './resourceservice';

describe('Resourceservice', () => {
  let service: Resourceservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resourceservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
