import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <graphic-array [array]="arr" [bgColor]="bgColor"></graphic-array>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <nz-divider></nz-divider>
      <div>n= {{ n }}</div>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic70 extends BaseGraphicComponent {
  arr = [1, 2];
  index = 2;
  bgColor: Record<number, string> = {};

  get n() {
    return this.data ? this.data[0] : 0;
  }

  run() {
    if (this.n < 3) {
      this.bgColor = { [this.n - 1]: '#5fb2ff' };
      this.result = this.n;
    } else {
      this.bgColor = {
        [this.index - 1]: '#a7d5ff',
        [this.index - 2]: '#a7d5ff',
        [this.index]: '#5fb2ff',
      };
      this.arr[this.index] =
        this.arr[this.index - 1] + this.arr[this.index - 2];
      if (this.n - 1 === this.index) {
        this.result = this.arr[this.n - 1];
      }
      this.index++;
    }
  }

  init() {
    if (this.data) {
      this.index = 2;
      this.arr = new Array(this.n);
      this.arr[0] = 1;
      this.arr[1] = 2;
      this.bgColor = {};
      this.result = undefined;
    }
  }

  answer(data: any[]): any {
    const n = data[0];

    if (n < 3) return n;
    const dp = new Array(n);
    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i < n; ++i) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
  }
}
