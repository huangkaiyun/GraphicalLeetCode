import { Component, OnInit, Input } from '@angular/core';
import { ListNode } from '.';

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
    return this.data?.toArray();
  }

  constructor() {}

  ngOnInit() {}
}
