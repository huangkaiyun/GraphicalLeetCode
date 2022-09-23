import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'graphic-action',
  template: `
    <button nz-button nzType="primary" *ngIf="!hasResult" (click)="next.emit()">
      {{ 'action.next' | translate }}
    </button>
    <button
      nz-button
      nzType="primary"
      *ngIf="hasResult"
      (click)="restart.emit()"
      nzDanger
    >
      {{ 'action.restart' | translate }}
    </button>
  `,
})
export class GraphicActionComponent implements OnInit {
  @Input() hasResult: boolean = false;
  @Output() next = new EventEmitter();
  @Output() restart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
