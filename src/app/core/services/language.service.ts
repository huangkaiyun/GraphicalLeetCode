import { Injectable } from '@angular/core';
import {
  NZ_I18N,
  NzI18nService,
  en_US,
  NzI18nInterface,
} from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject, ReplaySubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

export type Langs = 'zh-TW' | 'en-US';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private default: Langs = 'en-US';
  private langs: Record<
    Langs,
    { label: string; i18n: NzI18nInterface; locale: any }
  > = {
    'zh-TW': {
      label: '繁體中文',
      i18n: zh_TW,
      locale: zh,
    },
    'en-US': {
      label: 'English',
      i18n: en_US,
      locale: en,
    },
  };
  change$ = new ReplaySubject<LangChangeEvent>(1);
  lang$ = this.change$.pipe(map(({ lang }) => lang));
  current = this.translate.currentLang;

  constructor(
    private translate: TranslateService,
    private i18n: NzI18nService
  ) {}

  registeAll() {
    this.translate.addLangs(Object.keys(this.langs));
    this.translate.setDefaultLang(this.default);
    for (let lang in this.langs) {
      registerLocaleData(this.langs[lang as Langs].locale);
    }
    this.setLocale(this.default);
  }

  setLocale(lang: Langs) {
    this.translate.onLangChange
      .pipe(take(1))
      .subscribe((result) => this.change$.next(result));
    this.translate.use(lang);
    this.i18n.setLocale(
      this.langs[lang]?.i18n || this.langs[this.default].i18n
    );
    this.current = this.translate.currentLang;
  }

  getLangs() {
    return Object.keys(this.langs).map((key) => ({
      value: key,
      label: this.langs[key as Langs].label,
      default: key === this.default,
    }));
  }
}
