import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  template: ``,
})
export abstract class BaseGraphicComponent implements OnInit {
  @Input() data?: any[];

  result: any = undefined;

  get hasResult() {
    return this.result !== undefined;
  }

  abstract answer(data: any[]): any;
  abstract init(): any;
  abstract run(): any;

  ngOnInit(): void {
    this.init();
  }
}
