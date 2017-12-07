import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/home/login/login.component';
import {RegisterComponent} from './component/home/register/register.component';
import {BlogComponent} from './component/blog/blog.component';
import {GithubComponent} from './component/github/github.component';
import {ToolComponent} from './component/tool/tool.component';
import {AboutComponent} from './component/about/about.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'github',
    component: GithubComponent
  },
  {
    path: 'tool',
    component: ToolComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/index'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
