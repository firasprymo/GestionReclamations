import { TestBed } from '@angular/core/testing';

import { ReclamationsService } from './reclamations.service';

describe('CoursesService', () => {
  let service: ReclamationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
