import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <div>
          <graphic-array [data]="arr" [bgColor]="bgColor"></graphic-array>
          <nz-divider nzType="vertical"></nz-divider>
          <graphic-array
            [data]="[target]"
            [bgColor]="targetColor"
          ></graphic-array>
        </div>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <graphic-hashmap [map]="hashMap" [key]="key"></graphic-hashmap>

      <nz-divider></nz-divider>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
})
export class Graphic1 extends BaseGraphicComponent {
  hashMap = new Map<number, number>();
  index = -1;

  get arr() {
    return this.data ? this.data[0] : [];
  }

  get target() {
    return this.data ? this.data[1] : 0;
  }

  get bgColor() {
    return { [this.index]: '#5fb2ff' };
  }

  get targetColor() {
    return { 0: '#ddd' };
  }

  get key() {
    return this.arr[this.index];
  }

  run() {
    if (!this.hasResult) {
      this.index++;
      const num = this.arr[this.index];
      const diff = this.target - num;

      if (this.hashMap.has(num)) {
        this.result = [this.index, this.hashMap.get(num)];
      }
      this.hashMap.set(diff, this.index);
    }
  }

  init() {
    this.hashMap = new Map<number, number>();
    this.index = -1;
    this.result = undefined;
  }

  answer(data: any[]): any {
    if (data && data.length === 2) {
      const nums = data[0];
      const target = data[1];

      const map: { [key: number]: number } = {};

      for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (diff in map) {
          const secondIndex = map[diff];
          return [i, secondIndex];
        }

        map[num] = i;
      }
    }
    return [];
  }
}
