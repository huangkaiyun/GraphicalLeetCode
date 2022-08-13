import { Component, OnInit } from '@angular/core';
import { LanguageService, Langs } from '@core/services';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.less'],
})
export class I18nComponent implements OnInit {
  selection?: any;
  options: { value: any; label: string }[];

  constructor(private languageService: LanguageService) {
    this.options = this.languageService
      .getLangs()
      .map(({ value, label }) => ({ value, label }));
    this.selection = this.languageService
      .getLangs()
      .find((x) => x.default)!.value;
  }

  change(event: string) {
    this.languageService.setLocale(this.selection);
  }

  ngOnInit(): void {
    this.languageService.lang$.subscribe((value: string) => {
      if (value !== this.selection) this.change(value);
    });
  }
}
