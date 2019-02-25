import { Injectable } from '@angular/core';
import { SourceInformation } from './sources-information.model';
import { Source } from './source.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../core';


@Injectable()
export class SourceService {

  constructor(private http: HttpClient) { }

  public getSources(): Observable<SourceInformation> {
    const headers: HttpHeaders = new HttpHeaders({'X-Api-Key': CONFIG.baseSettings.apiKey});
    return this.http.get<SourceInformation>(CONFIG.newsAPIUrls.sources, {headers: headers});
  }

  public getLocalSource(): Source {
    let localSource = new Source();
    localSource.id = CONFIG.localSourceSettings.localSourceId;
    localSource.name = CONFIG.localSourceSettings.localSourceName;
    return localSource;
  }
}
