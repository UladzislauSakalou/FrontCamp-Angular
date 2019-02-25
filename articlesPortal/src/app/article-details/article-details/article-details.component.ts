import { Component, OnInit } from '@angular/core';
import { Article, ArticleDetailsResolverService, Source } from '../../models';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  public selectedSource: Source;
  constructor(private articleDetailsResolverService: ArticleDetailsResolverService ) { }

  ngOnInit() {
    this.article = this.articleDetailsResolverService.getSelectedArticle();
  }

}
