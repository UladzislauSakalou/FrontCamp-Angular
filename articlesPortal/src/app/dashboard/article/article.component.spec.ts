import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { ArticleService, ArticleDetailsResolverService, Article } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG } from '../../core';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleService: jasmine.SpyObj<ArticleService>;
  let articleDetailsResolverService: jasmine.SpyObj<ArticleDetailsResolverService>

  beforeEach(async(() => {
    const articleServiceSpy = jasmine.createSpyObj('ArticleService', ['createLocalArticle', 'updateLocalArticle']);
    const articleDetailsResolverServiceSpy = jasmine.createSpyObj('ArticleDetailsResolverService', ['getSelectedArticle', 'getSelectedSource']);

    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      providers: [
        { provide: ArticleService, useValue: articleServiceSpy },
        { provide: ArticleDetailsResolverService, useValue: articleDetailsResolverServiceSpy },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
      ]
    })
    .compileComponents();

    articleService = TestBed.get(ArticleService);
    articleDetailsResolverService = TestBed.get(ArticleDetailsResolverService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false when source not selected', () => {
    // Arrange
    // Act
    component.selectedSource = null;

    // Assert

    expect(component.localSourceSelected()).toBeFalsy();
  });

  it('should return true when source is local source', () => {
    // Arrange
    // Act
    component.selectedSource = {id: CONFIG.localSourceSettings.localSourceId, name: 'Local'};

    // Assert

    expect(component.localSourceSelected()).toBeTruthy();
  });
});
