import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  ngOnInit() {
    console.log(this.item);
  }

}
