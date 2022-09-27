import { TranslateModule } from '@ngx-translate/core';
import {
  Graphic1,
  Graphic9,
  Graphic13,
  Graphic70,
  Graphic83,
  Graphic88,
  Graphic94,
  Graphic100,
} from '@core/graphics';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicDirective } from './graphic.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { GraphicArrayComponent } from './array/array.component';
import { GraphicActionComponent } from './action/action.component';
import { GraphicHashMapComponent } from './hashmap/hashmap.component';
import { GraphicLinkedListComponent } from './linked-list/linked-list.component';
import { GraphicBinaryTreeComponent } from './binary-tree';

const components = [
  GraphicDirective,
  Graphic1,
  Graphic9,
  Graphic13,
  Graphic70,
  Graphic83,
  Graphic88,
  Graphic94,
  Graphic100,
];

@NgModule({
  declarations: [
    GraphicArrayComponent,
    GraphicActionComponent,
    GraphicHashMapComponent,
    GraphicLinkedListComponent,
    GraphicBinaryTreeComponent,
    ...components,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: components,
  providers: [],
})
export class GraphicModule {}
