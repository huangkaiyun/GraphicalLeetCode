import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
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
      <!-- <graphic-hashmap></graphic-hashmap> -->
      <nz-divider></nz-divider>
      <div>str = {{ str }}</div>
      <div>sum = {{ sum }}</div>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic13 extends BaseGraphicComponent implements OnInit {
  str = '';
  index = 0;
  hashMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  sum = 0;
  symbol: ('-' | '+')[] = [];
  colors = { '-': '#fc898a', '+': '#5fb2ff' };

  get bgColor() {
    const bgColor: Record<number, string> = {};
    this.symbol.forEach((s, index) => {
      bgColor[index] = this.colors[s];
    });
    return bgColor;
  }

  get arr() {
    return this.data ? (this.data[0] + '').split('') : [];
  }

  run() {
    if (!this.hasResult) {
      const value = this.hashMap.get(this.str[this.index]) || 0;
      if (
        this.index !== this.str.length - 1 &&
        value < this.hashMap.get(this.str[this.index + 1])!
      ) {
        this.sum -= value;
        this.symbol.push('-');
      } else {
        this.sum += value;
        this.symbol.push('+');
      }

      if (this.index === this.str.length - 1) this.result = this.sum;
      this.index++;
    }
  }

  init() {
    if (this.data) {
      this.str = this.data[0];
      this.result = undefined;
      this.index = 0;
      this.sum = 0;
      this.symbol = [];
    }
  }

  ngOnInit(): void {
    this.init();
  }

  answer(data: any[]): any {
    const s = data[0];
    let result = 0;

    for (let i = 0; i < s.length; ++i) {
      const value = this.hashMap.get(s[i]) || 0;
      if (i !== s.length - 1 && value < this.hashMap.get(s[i + 1])!) {
        result -= value;
      } else {
        result += value;
      }
    }
    return result;
  }
}
