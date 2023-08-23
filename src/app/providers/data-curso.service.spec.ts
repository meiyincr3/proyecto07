import { TestBed } from '@angular/core/testing';

import { DataCursoService } from './data-curso.service';

describe('DataCursoService', () => {
  let service: DataCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
