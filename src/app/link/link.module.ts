import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkComponent} from './link.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: LinkComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ],
  declarations: [
    LinkComponent
  ]
})
export class LinkModule {
}
