import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XiaomoComponent} from './xiaomo/xiaomo.component';
import {ProjectComponent} from './project/project.component';
import {ExperienceComponent} from './experience/experience.component';
import {ConcatComponent} from './concat/concat.component';
import {AbilityComponent} from './ability/ability.component';
import {UserCenterComponent} from '../common/header/user-center/user-center.component';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    XiaomoComponent,
    ProjectComponent,
    ExperienceComponent,
    ConcatComponent,
    AbilityComponent,
    UserCenterComponent
  ]
})
export class HomeModule {
}
