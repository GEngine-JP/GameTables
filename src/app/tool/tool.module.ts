import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ToolComponent} from './tool.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ToolComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ],
  declarations: [ToolComponent]
})
export class ToolModule { }
