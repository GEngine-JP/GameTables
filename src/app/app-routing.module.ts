import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/home/login/login.component';
import {RegisterComponent} from './component/home/register/register.component';
import {NgModule} from '@angular/core';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
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
    path: '**',
    redirectTo: '/login'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
