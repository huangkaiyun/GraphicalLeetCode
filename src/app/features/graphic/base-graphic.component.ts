import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: ``,
})
export abstract class BaseGraphicComponent {
  @Input() data?: any[];

  result: any = undefined;

  get hasResult() {
    return this.result !== undefined;
  }

  abstract answer(data: any[]): any;
}
