import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graphic-linked-list',
  template: `
    <div *ngIf="data">
      <ng-container
        *ngFor="let val of array; let index = index; let last = last"
      >
        <button
          nz-button
          nzShape="circle"
          [ngStyle]="{ 'background-color': bgColor[index] || '' }"
        >
          {{ val }}
        </button>
        <span
          *ngIf="!last"
          nz-icon
          nzType="arrow-right"
          nzTheme="outline"
        ></span>
      </ng-container>
    </div>
  `,
})
export class GraphicLinkedListComponent implements OnInit {
  @Input() data: ListNode | null = null;
  @Input() bgColor: Record<number, string> = {};

  get array() {
    return ListNode.toArray(this.data);
  }

  constructor() {}

  ngOnInit() {}
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(arr: number[]) {
    let next: ListNode | null = null;
    for (let i = arr.length - 1; i >= 0; --i) {
      const node: ListNode | null = new ListNode(arr[i], next);
      next = node;
    }
    return next;
  }

  static toArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    while (head !== null) {
      arr.push(head.val);
      head = head.next;
    }
    return arr;
  }
}
