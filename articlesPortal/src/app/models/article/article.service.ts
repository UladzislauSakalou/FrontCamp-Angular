import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ArticleInformation } from './articles-information.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../core';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(sourceId: string, pageSize: number): Observable<ArticleInformation> {
    const headers: HttpHeaders = new HttpHeaders({'X-Api-Key': CONFIG.baseSettings.apiKey});
    return this.http.get<ArticleInformation>(this.getLinkForNEWSAPIArticles(sourceId, pageSize), {headers: headers});
  }

  public getLocalArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(CONFIG.localSourceSettings.url);
  }

  public deleteLocalArticle(article: Article) {
    return this.http.delete(CONFIG.localSourceSettings.url + article._id)
  }

  public updateLocalArticle(article: Article) {
    return this.http.put(CONFIG.localSourceSettings.url + article._id, {title: article.title, urlToImage: article.urlToImage, content: article.content});
  }

  public createLocalArticle(article: Article) {
    return this.http.post(CONFIG.localSourceSettings.url, {title: article.title, urlToImage: article.urlToImage, content: article.content});
  }

  private getLinkForNEWSAPIArticles(sourceId: string, pageSize: number): string {
    return `${CONFIG.newsAPIUrls.articles}pageSize=${pageSize}&sources=${sourceId}`;
  }
}
