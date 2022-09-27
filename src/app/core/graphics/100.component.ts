import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';
import { TreeNode } from '@features/graphic/binary-tree';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <div>
          <div style="margin-bottom: 0.25rem; height: 2rem;">
            <small style="line-height: 2rem;">stackQ : </small>
            <graphic-array [data]="arrayP"></graphic-array>
          </div>
          <div style="margin-bottom: 0.25rem; height: 2rem;">
            <small style="line-height: 2rem;">stackP : </small>
            <graphic-array [data]="arrayQ"></graphic-array>
          </div>
        </div>
        <graphic-action
          [hasResult]="hasResult"
          (next)="run()"
          (restart)="init()"
        ></graphic-action>
      </div>
      <div style="display: flex;">
        <div style="width: 100%">
          <graphic-binary-tree [data]="treeP"></graphic-binary-tree>
          <div style="text-align: center"><small>TreeP</small></div>
        </div>
        <div style="width: 100%">
          <graphic-binary-tree [data]="treeQ"></graphic-binary-tree>
          <div style="text-align: center"><small>TreeQ</small></div>
        </div>
      </div>
      <nz-divider></nz-divider>
      <div *ngIf="hasResult">result = {{ result | json }}</div>
    </ng-container>
  `,
  styleUrls: ['./graphic.less'],
})
export class Graphic100 extends BaseGraphicComponent {
  stackP: (TreeNode | null)[] = [];
  stackQ: (TreeNode | null)[] = [];
  treeP: TreeNode | null = null;
  treeQ: TreeNode | null = null;

  get arrayP() {
    return this.stackP.map((node) => (node ? node.val.toString() : ''));
  }

  get arrayQ() {
    return this.stackQ.map((node) => (node ? node.val.toString() : ''));
  }

  run() {
    try {
      const nodeP = this.stackP.pop();
      const nodeQ = this.stackQ.pop();

      if (nodeP === null || nodeQ === null) {
        if (!this.result) {
          if (nodeP) nodeP.color = '#fc898a';
          if (nodeQ) nodeQ.color = '#fc898a';
        }
        this.result = nodeP === nodeQ;
        return;
      }
      if (nodeP!.val !== nodeQ!.val) {
        if (nodeP) nodeP.color = '#fc898a';
        if (nodeQ) nodeQ.color = '#fc898a';
        this.result = false;
        return;
      }

      nodeP!.color = '#5fb2ff';
      nodeQ!.color = '#5fb2ff';
      if (nodeP!.left !== null || nodeQ!.left !== null) {
        this.stackP.push(nodeP!.left);
        this.stackQ.push(nodeQ!.left);
      }
      if (nodeP!.right !== null || nodeQ!.right !== null) {
        this.stackP.push(nodeP!.right);
        this.stackQ.push(nodeQ!.right);
      }

      if (this.stackP.length === 0 || this.stackQ.length === 0) {
        this.result = this.stackP.length === this.stackQ.length;
        return;
      }
    } catch (error) {
      console.log(error);
      this.result = false;
    }
  }

  init() {
    if (this.data) {
      this.treeP = TreeNode.FromArray([...this.data[0]]);
      this.treeQ = TreeNode.FromArray([...this.data[1]]);
      this.stackP = [this.treeP];
      this.stackQ = [this.treeQ];
      this.result = undefined;
    }
  }

  answer(data: any[]): any {
    if (data) {
      const treeP = TreeNode.FromArray([...data[0]]);
      const treeQ = TreeNode.FromArray([...data[1]]);
      return this.isSameTree(treeP, treeQ);
    }
  }

  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    try {
      const stackP: (TreeNode | null)[] = [p];
      const stackQ: (TreeNode | null)[] = [q];

      while (stackP.length) {
        const nodeP = stackP.pop();
        const nodeQ = stackQ.pop();

        if (nodeP === null || nodeQ === null) return nodeP === nodeQ;
        if (nodeP?.val !== nodeQ?.val) return false;
        if (nodeP?.left !== null || nodeQ?.left !== null) {
          stackP.push(nodeP?.left || null);
          stackQ.push(nodeQ?.left || null);
        }
        if (nodeP?.right !== null || nodeQ?.right !== null) {
          stackP.push(nodeP?.right || null);
          stackQ.push(nodeQ?.right || null);
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
