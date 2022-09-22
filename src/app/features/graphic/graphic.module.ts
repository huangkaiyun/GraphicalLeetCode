import { Graphic1, Graphic9, Graphic13 } from '@core/graphics';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseGraphicComponent } from './base-graphic.component';
import { GraphicDirective } from './graphic.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const components = [GraphicDirective, Graphic1, Graphic9, Graphic13];

@NgModule({
  declarations: components,
  imports: [CommonModule, NzButtonModule, NzDividerModule],
  exports: components,
  providers: [],
})
export class GraphicModule {}
