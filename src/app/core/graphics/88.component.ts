import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <div>
          <div style="margin-bottom: 0.5rem">
            <graphic-array
              [data]="nums1"
              [bgColor]="nums1Color"
            ></graphic-array>
          </div>
          <div>
            <graphic-array
              [data]="nums2"
              [bgColor]="nums2Color"
            ></graphic-array>
          </div>
        </div>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <nz-divider></nz-divider>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic88 extends BaseGraphicComponent {
  index = 0;
  indexM = 0;
  indexN = 0;
  nums1: number[] = [];
  nums2: number[] = [];

  get nums1Color() {
    return this.hasResult
      ? {}
      : {
          [this.indexM]: this.isNums1Bigger() ? '#a7d5ff' : '#fc898a',
          [this.index]: '#5fb2ff',
        };
  }

  get nums2Color() {
    return this.hasResult
      ? {}
      : {
          [this.indexN]: this.isNums1Bigger() ? '#fc898a' : '#a7d5ff',
        };
  }

  isNums1Bigger() {
    return this.nums1[this.indexM] > this.nums2[this.indexN];
  }

  run() {
    if (this.indexN < 0) {
      this.result = this.nums1;
    } else {
      if (this.isNums1Bigger()) {
        this.nums1[this.index] = this.nums1[this.indexM];
        this.indexM--;
      } else {
        this.nums1[this.index] = this.nums2[this.indexN];
        this.indexN--;
      }
      this.index--;
    }
  }

  init() {
    if (this.data) {
      this.nums1 = [...this.data[0]];
      this.nums2 = [...this.data[2]];
      this.index = this.nums1.length - 1;
      this.indexM = this.data[1] - 1;
      this.indexN = this.data[3] - 1;
      this.result = undefined;
    }
  }

  answer(data: any[]): any {
    if (data) {
      const nums1 = [...data[0]];
      const m = data[1];
      const nums2 = [...data[2]];
      const n = data[3];

      let indexM = m - 1;
      let indexN = n - 1;

      for (let i = m + n - 1; i >= 0; --i) {
        if (indexN < 0) return nums1;
        if (indexM >= 0 && nums1[indexM] > nums2[indexN]) {
          nums1[i] = nums1[indexM];
          indexM--;
        } else {
          nums1[i] = nums2[indexN];
          indexN--;
        }
      }
      return nums1;
    }
  }
}
