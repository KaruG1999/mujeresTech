import { TestBed } from '@angular/core/testing';

import { Storyservice } from './storyservice';

describe('Storyservice', () => {
  let service: Storyservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storyservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
