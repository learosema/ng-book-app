import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('BookDataService', () => {
  let service: BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
