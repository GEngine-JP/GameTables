import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {GithubComponent} from './github.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    GithubComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: GithubComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ]

})
export class GithubModule {
}
