import { TestBed } from '@angular/core/testing';

import { ArticleDetailsResolverService } from './article-details-resolver.service';

describe('ArticleDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleDetailsResolverService = TestBed.get(ArticleDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
