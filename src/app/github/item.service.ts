import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {github} from '../../config';
import {Item} from './item';

@Injectable()
export class ItemService {

  private githubApi = github;

  constructor(public http: HttpClient) {
  }


  public getGithubInfo(): Observable<any> {
    return this.http.get(this.githubApi).map((data: any) => {
      return data.items.map(_data => {
        const item: Item = new Item();
        item.name = _data.name;
        item.icon = _data.owner.avatar_url;
        item.star = _data.stargazers_count;
        item.link = _data.url;
        item.summary = _data.description;
        return item;
      });
    });
  }
}
