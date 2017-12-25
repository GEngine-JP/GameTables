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
    const item: Item[] = JSON.parse(localStorage.getItem('githubItem'));
    if (item != null) {
      this.items = item;
    }
    this.itemService.getGithubInfo().subscribe(list => {
      this.items = list as Array<Item>;
      console.log(list);
      localStorage.setItem('githubItem', JSON.stringify(this.items));
    });
  }

}
