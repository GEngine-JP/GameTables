import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';


/**
 * https://github.com/angular/angular-cli/issues/6309
 * 修复maxSize错误
 */

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: AboutComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule {
}
