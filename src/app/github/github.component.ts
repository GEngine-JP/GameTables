import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  private items: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    // 优先从缓存取
    const item: Item[] = JSON.parse(sessionStorage.getItem('githubItem'));
    if (item != null) {
      this.items = item;
    }

    // 缓存没有直接拉数据
    this.itemService.getGithubInfo().subscribe(list => {
      this.items = list as Array<Item>;
      console.log(list);
      sessionStorage.setItem('githubItem', JSON.stringify(this.items));
    });
  }

}
