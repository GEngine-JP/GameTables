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
    this.itemService.getGithubInfo().subscribe(list => {
      this.items = list;
      console.log(this.items);
    });
  }

}
