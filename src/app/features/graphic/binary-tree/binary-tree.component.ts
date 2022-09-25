import { Component, Input } from '@angular/core';
import { TreeNode } from '.';

@Component({
  selector: 'graphic-binary-tree',
  template: `
    <ng-container *ngIf="data">
      <div nz-row nzAlign="middle" nzJustify="center" class="root">
        <div nz-col>
          <button
            nz-button
            nzType="default"
            nzShape="circle"
            [ngStyle]="{ 'background-color': data.color }"
          >
            {{ data.val }}
          </button>
        </div>
      </div>
      <div nz-row class="children">
        <div [ngClass]="{ left: data.left }">
          <div></div>
        </div>
        <div nz-col nzSpan="12">
          <graphic-binary-tree [data]="data.left"></graphic-binary-tree>
        </div>
        <div [ngClass]="{ right: data.right }">
          <div></div>
        </div>
        <div nz-col nzSpan="12">
          <graphic-binary-tree [data]="data.right"></graphic-binary-tree>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./binary-tree.component.less'],
})
export class GraphicBinaryTreeComponent {
  @Input() data: TreeNode | null = null;
}
