import { NzIconModule } from 'ng-zorro-antd/icon';
import { I18nModule } from '@shared/i18n/i18n.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuModule } from '@features/menu/menu.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    I18nModule,
    MenuModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
