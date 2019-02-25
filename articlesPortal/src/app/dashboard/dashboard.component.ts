import { Component, OnInit } from '@angular/core';
import { ArticleService, SourceService, ArticleDetailsResolverService } from '../models';
import { Article, Source } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CONFIG } from '../core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public articles: Article[] = [];
  public sources: Source[] = [];
  public isLocalSource: boolean = false;
  public selectedSource: Source = null;
  public onlyCreatedByMe: Boolean = false;
  public showLoadMoreButton: Boolean = false;
  public filterargs = '';
  public filterInput = '';

  constructor(
    private articleService: ArticleService,
    private sourceService: SourceService,
    private articleDetailsResolverService: ArticleDetailsResolverService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public getSources() {
    this.sourceService.getSources()
      .subscribe(data => {
        this.sources = data.sources;
      })
  }

  ngOnInit() {
    this.getSources();
  }

  public onSourceChange(newSource) {
    this.selectedSource = newSource;
    this.articleDetailsResolverService.setSelectedSource(this.selectedSource);
    if (newSource) {
      this.getArticles(CONFIG.baseSettings.pageSize);
    }
  }

  public onAddArticleClick() {
    this.router.navigate(['article-details/add']);
  }

  public onOnlyCreatedByMeClick() {
    this.onlyCreatedByMe = !this.onlyCreatedByMe;

    if (this.onlyCreatedByMe) {
      this.selectedSource = this.sourceService.getLocalSource();
      this.articleService.getLocalArticles()
      .subscribe(data => {
        this.articles = data;
      });
    } else {
      this.selectedSource = null;
      this.articles = [];
      this.showLoadMoreButton = false;
    }

    this.articleDetailsResolverService.setSelectedSource(this.selectedSource);
  }

  public onShowMoreButtonClick() {
    this.getArticles(this.articles.length + CONFIG.baseSettings.pageSize);
  }

  public onArticleDeleted($event) {
    this.articleService.getLocalArticles()
      .subscribe(data => {
        this.articles = data;
      });
  }

  public onFilterButtonClick() {

    this.filterargs = this.filterInput;
  }

  private getArticles(pageSize: number) {
    this.articleService.getArticles(this.selectedSource.id, pageSize)
      .subscribe(data => {
        this.articles = data.articles;
        this.showLoadMoreButton = data.totalResults > this.articles.length ? true : false;
      });
  }
}
