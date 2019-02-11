import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(sourceId: number): Article[] {
    let result: Article[] = [];

    let a: Article = new Article();
    a.name = `Article 1 from Source ${sourceId}`;

    let b: Article = new Article();
    b.name = `Article 1 from Source ${sourceId}`;

    result.push(a);
    result.push(b);

    return result;
    
    // this.spinnerService.show();
    // return <Observable<Character[]>>this.http
    //   .get(charactersUrl)
    //   .map(res => {
    //     const x = this.extractData<Character[]>(res);
    //     return this.extractData<Character[]>(res);
    //   })
    //   .catch(this.exceptionService.catchBadResponse)
    //   .finally(() => this.spinnerService.hide());
  }
}
