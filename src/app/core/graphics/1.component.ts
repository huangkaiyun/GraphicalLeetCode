import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

@Component({
  template: `<div>problem 1</div>
    <span>{{ data }}</span> `,
  styles: [``],
})
export class Graphic1 extends BaseGraphicComponent {
  answer(data: any[]): any {
    throw new Error('Method not implemented.');
  }
}
