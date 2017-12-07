import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {GithubComponent} from './github.component';

@NgModule({
  declarations: [
    GithubComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]

})
export class GithubModule {
}
