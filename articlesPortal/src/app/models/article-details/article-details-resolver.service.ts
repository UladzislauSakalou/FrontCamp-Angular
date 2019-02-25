import { Injectable } from '@angular/core';
import { Article, Source } from '../../models';
import { CONFIG } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsResolverService {

  private selectedSource: Source;
  private selectedArticle: Article;

  constructor() { }

  public get localSourceSelected(): Boolean {
    return this.selectedSource.id == CONFIG.localSourceSettings.localSourceId;
  }

  public getSelectedArticle(): Article {
    return this.selectedArticle
  }

  public setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  public getSelectedSource(): Source {
    return this.selectedSource
  }

  public setSelectedSource(source: Source) {
    this.selectedSource = source;
  }
}
