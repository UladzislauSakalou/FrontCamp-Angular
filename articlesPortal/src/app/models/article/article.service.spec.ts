import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleService = new ArticleService(<any>httpClientSpy);
    expect(service).toBeTruthy();
  });
});
