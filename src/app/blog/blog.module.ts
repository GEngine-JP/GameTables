import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {BlogComponent} from './blog.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: BlogComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
