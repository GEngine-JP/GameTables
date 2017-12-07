import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.addLangs(['zh', 'en', 'ja']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en|ja/) ? browserLang : 'en');
  }
}
