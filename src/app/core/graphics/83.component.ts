import { Component } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';
import { ListNode } from '@features/graphic/linked-list/linked-list.component';

@Component({
  template: `
    <ng-container *ngIf="data">
      <div style="display: flex;justify-content: space-between;">
        <graphic-linked-list
          [data]="head"
          [bgColor]="bgColor"
        ></graphic-linked-list>
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
export class Graphic83 extends BaseGraphicComponent {
  index = 0;
  head: ListNode | null = null;
  current: ListNode | null = null;

  get arr() {
    return this.data ? this.data[0] : [];
  }

  get bgColor() {
    return {
      [this.index]: '#5fb2ff',
      [this.index + 1]:
        this.current?.val === this.current?.next?.val ? '#fc898a' : '#a7d5ff',
    };
  }

  run() {
    if (this.current) {
      if (this.current.val === this.current.next?.val) {
        this.current.next = this.current.next?.next;
      } else {
        if (this.current.next === null)
          this.result = this.head?.toArray() || [];
        this.current = this.current.next;
        this.index++;
      }
    }
  }

  init() {
    if (this.data) {
      this.index = 0;
      this.head = new ListNode(this.arr);
      this.current = this.head;
      this.result = undefined;
    }
  }

  answer(data: any[]): any {
    const head = new ListNode(data[0]);
    return this.deleteDuplicates(head)?.toArray() || [];
  }

  deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next) {
      if (head.val === head.next.val) {
        head.next = head.next.next;
        this.deleteDuplicates(head);
      } else {
        this.deleteDuplicates(head.next);
      }
    }
    return head;
  }
}
