import { I18nModule } from '@shared/i18n/i18n.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuModule } from '@features/menu/menu.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NzLayoutModule, I18nModule, MenuModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
