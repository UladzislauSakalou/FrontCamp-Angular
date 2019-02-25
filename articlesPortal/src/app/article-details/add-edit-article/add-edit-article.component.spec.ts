import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArticleComponent } from './add-edit-article.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ArticleService, ArticleDetailsResolverService } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { CONFIG } from '../../core';
import { Observable } from 'rxjs';

describe('AddEditArticleComponent', () => {
  let component: AddEditArticleComponent;
  let fixture: ComponentFixture<AddEditArticleComponent>;
  let articleService: jasmine.SpyObj<ArticleService>;
  let articleDetailsResolverService: jasmine.SpyObj<ArticleDetailsResolverService>;

  beforeEach(async(() => {
    const articleServiceSpy = jasmine.createSpyObj('ArticleService', ['createLocalArticle', 'updateLocalArticle']);
    const articleDetailsResolverServiceSpy = jasmine.createSpyObj('ArticleDetailsResolverService', ['getSelectedArticle']);
    const mockActivatedRoute = { data: {
      subscribe: function() {

      }
    }};

    TestBed.configureTestingModule({
      declarations: [ AddEditArticleComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ArticleService, useValue: articleServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: {} },
        FormBuilder,
        { provide: ArticleDetailsResolverService, useValue: articleDetailsResolverServiceSpy }
      ]
    })
    .compileComponents();

    articleService = TestBed.get(ArticleService);
    articleDetailsResolverService = TestBed.get(ArticleDetailsResolverService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create local article when Save button clicked and method is Add', () => {
    // Arrange
    component.method = CONFIG.baseSettings.addActionName;
    articleService.createLocalArticle.and.returnValue(new Observable<Object>());

    // Act
    component.onSaveClick();

    // Assert
    expect(articleService.createLocalArticle.calls.count()).toBe(1, 'createLocalArticle was called');
  });

  it('should update local article when Save button clicked and method is Edit', () => {
    // Arrange
    component.method = CONFIG.baseSettings.editActionName;
    articleDetailsResolverService.getSelectedArticle.and.returnValue({_id: 1});
    articleService.updateLocalArticle.and.returnValue(new Observable<Object>());

    // Act
    component.onSaveClick();

    // Assert
    expect(articleService.updateLocalArticle.calls.count()).toBe(1, 'updateLocalArticle was called');
  });
});
