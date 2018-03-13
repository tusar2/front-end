import { TestBed, inject } from '@angular/core/testing';

import { ReportFieldsService } from './report-fields.service';

describe('ReportFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportFieldsService]
    });
  });

  it('should be created', inject([ReportFieldsService], (service: ReportFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
