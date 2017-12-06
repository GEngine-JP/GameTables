import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XiaomoComponent} from './xiaomo/xiaomo.component';
import {ProjectComponent} from './project/project.component';
import {ExperienceComponent} from './experience/experience.component';
import {ConcatComponent} from './concat/concat.component';
import { AbilityComponent } from './ability/ability.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XiaomoComponent, ProjectComponent, ExperienceComponent, ConcatComponent, AbilityComponent]
})
export class HomeModule {
}
