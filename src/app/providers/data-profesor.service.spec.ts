import { TestBed } from '@angular/core/testing';

import { DataProfesorService } from './data-profesor.service';

describe('DataProfesorService', () => {
  let service: DataProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
