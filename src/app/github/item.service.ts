import {Injectable} from '@angular/core';
import {Item} from './item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ItemService {

  private githubApi = './mock-data/item.json';

  constructor(public http: HttpClient) {
  }


  public getGithubInfo(): Observable<Item[]> {
    return this.http.get<Item[]>(this.githubApi);
  }

}
