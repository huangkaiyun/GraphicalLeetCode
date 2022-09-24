import { TranslateModule } from '@ngx-translate/core';
import { Graphic1, Graphic9, Graphic13, Graphic70 } from '@core/graphics';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicDirective } from './graphic.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GraphicArrayComponent } from './array/array.component';
import { GraphicActionComponent } from './action/action.component';
import { GraphicHashMapComponent } from './hashmap/hashmap.component';

const components = [GraphicDirective, Graphic1, Graphic9, Graphic13, Graphic70];

@NgModule({
  declarations: [
    GraphicArrayComponent,
    GraphicActionComponent,
    GraphicHashMapComponent,
    ...components,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
  ],
  exports: components,
  providers: [],
})
export class GraphicModule {}
