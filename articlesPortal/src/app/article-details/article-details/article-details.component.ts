import { Component, OnInit } from '@angular/core';
import { Article, ArticleDetailsResolverService } from '../../models';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  constructor(private articleDetailsResolverService: ArticleDetailsResolverService ) { }

  ngOnInit() {
    this.article = this.articleDetailsResolverService.getSelectedArticle();
  }

}
