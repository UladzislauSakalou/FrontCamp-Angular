import { Injectable } from '@angular/core';
import { Source } from './source.model';

@Injectable()
export class SourceService {

  constructor() { }

  public getSources(): Source[] {
    let result: Source[] = [];

    let a: Source = new Source();
    a.name = "Source 1";
    a.id = 1;

    let b: Source = new Source();
    b.name = "Source 2";
    b.id = 2;

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
