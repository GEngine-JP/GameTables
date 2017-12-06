import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './component/home/login/login.component';
import {RegisterComponent} from './component/home/register/register.component';
import {LoginService} from './component/home/login/login.service';
import {RegisterService} from './component/home/register/register.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {LoginPipe} from './component/home/login/login.pipe';
import {LoginDirective} from './component/home/login/login.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { GithubComponent } from './component/github/github.component';
import { LinkComponent } from './component/link/link.component';
import { AboutComponent } from './component/about/about.component';
import { ToolComponent } from './component/tool/tool.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginPipe,
    LoginDirective,
    HomeComponent,
    BlogComponent,
    GithubComponent,
    LinkComponent,
    AboutComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
