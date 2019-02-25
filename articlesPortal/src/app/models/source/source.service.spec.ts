import { TestBed } from '@angular/core/testing';

import { SourceService } from './source.service';

describe('SourceService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceService = new SourceService(<any>httpClientSpy);
    expect(service).toBeTruthy();
  });
});
