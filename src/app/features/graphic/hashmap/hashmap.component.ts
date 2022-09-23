import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graphic-hashmap',
  template: `
    <nz-table #basicTable [nzData]="dataSet">
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.key }}</td>
          <td>{{ data.value }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
})
export class GraphicHashMapComponent implements OnInit {
  dataSet: { key: string; value: string }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
