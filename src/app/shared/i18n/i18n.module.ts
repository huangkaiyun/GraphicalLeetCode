import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './i18n.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LanguageService } from '@core/services';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [I18nComponent],
  imports: [CommonModule, FormsModule, NzSelectModule, TranslateModule],
  exports: [I18nComponent],
})
export class I18nModule {}
