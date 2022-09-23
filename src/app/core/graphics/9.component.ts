import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <div>
          <nz-button-group>
            <ng-container *ngFor="let c of arr; let index = index">
              <button nz-button *ngIf="index <= i">
                {{ c }}
              </button>
            </ng-container>
          </nz-button-group>
          <nz-divider nzType="vertical"></nz-divider>
          <nz-button-group>
            <ng-container *ngFor="let c of arr; let index = index">
              <button nz-button *ngIf="index > i">
                {{ c }}
              </button>
            </ng-container>
          </nz-button-group>
        </div>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <nz-divider></nz-divider>
      <div>x = {{ x }}</div>
      <div>reverse = {{ reverse }}</div>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic9 extends BaseGraphicComponent implements OnInit {
  reverse = 0;
  x = 0;
  i = 0;

  get arr() {
    return this.data ? (this.data[0] + '').split('') : [];
  }

  run() {
    if (this.result === undefined) {
      if (this.x < 0 || (this.x % 10 == 0 && this.x != 0)) this.result = false;

      this.reverse = this.reverse * 10 + (this.x % 10);
      this.x = Math.floor(this.x / 10);
      this.i--;
      if (this.x <= this.reverse)
        this.result =
          this.x === this.reverse || this.x === Math.floor(this.reverse / 10);
    }
  }

  init() {
    if (this.data) {
      this.x = this.data[0];
      this.reverse = 0;
      this.result = undefined;
      this.i = this.arr.length - 1;
    }
  }

  ngOnInit(): void {
    this.init();
  }

  answer(data: any[]): any {
    let _x = data[0];
    let _reverse = 0;

    if (_x < 0 || (_x % 10 == 0 && _x != 0)) {
      return false;
    }

    while (_x > _reverse) {
      _reverse = _reverse * 10 + (_x % 10);
      _x = Math.floor(_x / 10);
    }
    return _x === _reverse || _x === Math.floor(_reverse / 10);
  }
}
