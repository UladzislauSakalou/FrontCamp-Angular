import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { ArticleService, ArticleDetailsResolverService, SourceService, Article } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let articleService: jasmine.SpyObj<ArticleService>;
  let articleDetailsResolverService: jasmine.SpyObj<ArticleDetailsResolverService>;
  let sourceService: jasmine.SpyObj<SourceService>;

  beforeEach(async(() => {
    const articleServiceSpy = jasmine.createSpyObj('ArticleService', ['getArticles', 'getLocalArticles']);
    const articleDetailsResolverServiceSpy = jasmine.createSpyObj('ArticleDetailsResolverService', ['setSelectedSource']);
    const sourceServiceSpy = jasmine.createSpyObj('SourceService', ['getSources', 'getLocalSource']);

    TestBed.configureTestingModule({
      declarations: [
         DashboardComponent, 
         DashboardHeaderComponent,
         ArticleComponent
      ],
      imports: [
        FormsModule,
        SharedModule
      ],
      providers: [
        { provide: ArticleService, useValue: articleServiceSpy },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: ArticleDetailsResolverService, useValue: articleDetailsResolverServiceSpy },
        { provide: SourceService, useValue: sourceServiceSpy }
      ]
    })
    .compileComponents();

    articleService = TestBed.get(ArticleService);
    articleDetailsResolverService = TestBed.get(ArticleDetailsResolverService);
    sourceService = TestBed.get(SourceService);
  }));

  beforeEach(() => {
    sourceService.getSources.and.returnValue(new Observable<Object>());

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected source when source changed', () => {
    // Arrange
    articleService.getArticles.and.returnValue(new Observable<Object>());
    const stub = {id: '1', name: 'Source1'};

    // Act
    component.onSourceChange(stub);

    // Assert
    expect(component.selectedSource).toBe(stub);
  });

  it('should get local articles when only created by me selected', () => {
    // Arrange
    component.onlyCreatedByMe = false;
    const stub = {id: '2', name: 'Source2'};
    sourceService.getLocalSource.and.returnValue(stub);
    articleService.getLocalArticles.and.returnValue(new Observable<Object>());

    // Act

    component.onOnlyCreatedByMeClick();

    // Assert
    expect(articleService.getLocalArticles.calls.count()).toBe(1);
  });

  it('should clear source and articles when only created by me not selected', () => {
    // Arrange
    const stubSource = {id: '3', name: 'Source3'};

    component.onlyCreatedByMe = true;
    component.selectedSource = stubSource;
    component.articles = [new Article(), new Article()];

    // Act

    component.onOnlyCreatedByMeClick();

    // Assert
    expect(component.selectedSource).toBe(null);
    expect(component.articles.length).toBe(0);
  });
});
