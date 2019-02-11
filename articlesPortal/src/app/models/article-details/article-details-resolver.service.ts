import { Injectable } from '@angular/core';
import { Article, Source } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsResolverService {

  private selectedSource: Source;
  private selectedArticle: Article;

  constructor() { }

  public getSelectedArticle(): Article {
    return this.selectedArticle
  }

  public setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }
}
