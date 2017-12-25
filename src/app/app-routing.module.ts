import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './home/login/login.component';
import {RegisterComponent} from './home/register/register.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: './home/home.module#HomeModule'
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
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'github',
    loadChildren: './github/github.module#GithubModule'
  },
  {
    path: 'tool',
    loadChildren: './tool/tool.module#ToolModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
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
