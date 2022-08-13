import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
