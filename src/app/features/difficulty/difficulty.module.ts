import { TranslateModule } from '@ngx-translate/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyComponent } from './difficulty.component';

@NgModule({
  declarations: [DifficultyComponent],
  imports: [CommonModule, NzTagModule, TranslateModule],
  exports: [DifficultyComponent],
})
export class DifficultyModule {}
