import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graphic-array',
  templateUrl: './array.component.html',
})
export class GraphicArrayComponent implements OnInit {
  @Input() array?: (string | number)[];
  @Input() bgColor: Record<number, string> = { 0: '#ddd' };

  constructor() {}

  ngOnInit(): void {}
}
