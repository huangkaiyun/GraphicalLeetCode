import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DifficultyModule } from '@features/difficulty/difficulty.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemComponent } from './problem.component';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@shared/i18n/i18n.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProblemGuard } from '@core/guards/problem.guard';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { FormsModule } from '@angular/forms';
import { LeetcodeLinkModule } from '@features/leetcode-link/leetcode-link.module';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [ProblemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: ProblemComponent, canActivate: [ProblemGuard] },
    ]),
    I18nModule,
    TranslateModule,
    DifficultyModule,
    NzBreadCrumbModule,
    NzIconModule,
    FormsModule,
    NzCodeEditorModule,
    NzGridModule,
    LeetcodeLinkModule,
    NzSelectModule,
  ],
  exports: [RouterModule],
})
export class ProblemModule {}
