import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginService} from './home/login/login.service';
import {RegisterService} from './home/register/register.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {Http, HttpModule, JsonpModule} from '@angular/http';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {HomeModule} from './home/home.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './home/login/login.component';
import {RegisterComponent} from './home/register/register.component';
import {GithubComponent} from './github/github.component';
import {LinkComponent} from './link/link.component';
import {ToolComponent} from './tool/tool.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {ItemService} from './github/item.service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    GithubComponent,
    LinkComponent,
    AboutComponent,
    ToolComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    NgZorroAntdModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  providers: [
    LoginService,
    RegisterService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
