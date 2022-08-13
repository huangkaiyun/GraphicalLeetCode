import { DifficultyModule } from '@features/difficulty/difficulty.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemComponent } from './problem.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { I18nModule } from '@shared/i18n/i18n.module';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { ProblemGuard } from '@core/guards/problem.guard';
import { LanguageService } from '@core/services';

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
  ],
  exports: [RouterModule],
})
export class ProblemModule {}
