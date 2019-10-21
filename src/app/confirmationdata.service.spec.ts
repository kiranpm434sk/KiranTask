import { TestBed } from '@angular/core/testing';

import { ConfirmationdataService } from './confirmationdata.service';

describe('ConfirmationdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmationdataService = TestBed.get(ConfirmationdataService);
    expect(service).toBeTruthy();
  });
});
