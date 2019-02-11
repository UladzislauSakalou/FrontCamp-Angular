import { Component, OnInit } from '@angular/core';
import { ArticleService, SourceService, ArticleDetailsResolverService } from '../models';
import { Article, Source } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // private router = Router;
  public articles: Article[] = [];
  public sources: Source[] = [];
  public isLocalSource: boolean = false;
  public selectedSource: Source = null;

  constructor(
    private articleService: ArticleService, 
    private sourceService: SourceService, 
    private articleDetailsResolverService: ArticleDetailsResolverService,
    private route: ActivatedRoute,
    private router: Router 
    ) { }

  public getArticles(sourceId) {
    this.articles = [];
    this.articles = this.articleService.getArticles(sourceId);
  }

  public getSources() {
    this.sources = [];
    this.sources = this.sourceService.getSources();
  }

  ngOnInit() {
    this.getSources();
  }

  public onSourceChange(newSource) {
    if (newSource) {
      this.getArticles(newSource.id);
    }
  }

  public onArticleSelected(event: Article) {
    this.articleDetailsResolverService.setSelectedArticle(event);
    this.router.navigate(['article-details']);
  }

  public onAddArticleClick() {
    this.router.navigate(['article-details/add']);
  }

}
