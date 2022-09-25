import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';
import { TreeNode } from '@features/graphic/binary-tree';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <div>
          <div style="margin-bottom: 0.25rem; height: 2rem;">
            <small style="line-height: 2rem;">stack : </small>
            <graphic-array [data]="stackArray"></graphic-array>
          </div>
          <div style="margin-bottom: 0.5rem; height: 2rem; text-aligin: center">
            <small style="line-height: 2rem;">result : </small>
            <graphic-array [data]="array"></graphic-array>
          </div>
        </div>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <graphic-binary-tree [data]="tree"></graphic-binary-tree>
      <nz-divider></nz-divider>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic94 extends BaseGraphicComponent {
  array: number[] = [];
  stack: TreeNode[] = [];
  current: TreeNode | null = null;
  tree: TreeNode | null = null;

  get stackArray() {
    return this.stack.map(({ val }) => val);
  }

  run() {
    if (!this.current && this.stack.length === 0) this.result = this.array;

    if (this.current) {
      this.stack.push(this.current);
      this.current.color = '#fcc789';
      this.current = this.current.left;
    } else {
      const node = this.stack.pop();
      if (node) {
        node.color = '#5fb2ff';
        this.array.push(node.val);
        this.current = node.right;
      }
    }
  }

  init() {
    if (this.data) {
      this.tree = TreeNode.FromArray([...this.data[0]]);
      this.array = [];
      this.stack = [];
      this.current = this.tree;
      this.result = undefined;
    }
  }

  answer(data: any[]): any {
    if (data) {
      const tree = TreeNode.FromArray([...data[0]]);
      return this.inorderTraversal(tree);
    }
  }

  inorderTraversal(root: TreeNode | null) {
    if (root === null) return [];
    const array: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      const node = stack.pop();
      if (node) {
        array.push(node.val);

        if (node.right) {
          current = node.right;
        }
      }
    }
    return array;
  }
}
