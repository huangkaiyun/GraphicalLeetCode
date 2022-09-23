import { Component, Input } from '@angular/core';

@Component({
  selector: 'graphic-hashmap',
  template: `
    <ng-container *ngIf="map">
      <div style="margin-top: 0.5rem; margin-left: 0.5rem">Hash Table</div>
      <nz-table
        #basicTable
        [nzData]="dataSet"
        nzSize="small"
        [nzShowPagination]="false"
        [nzWidthConfig]="['20%', '80%']"
        [nzBordered]="true"
        [nzOuterBordered]="true"
      >
        <thead>
          <tr>
            <th style="text-align: center">key</th>
            <th style="text-align: center">value</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let data of basicTable.data"
            [ngStyle]="{
              'background-color': data.key === key ? '#5fb2ff' : ''
            }"
          >
            <td style="text-align: center">{{ data.key }}</td>
            <td style="text-align: center">{{ data.value }}</td>
          </tr>
        </tbody>
      </nz-table>
    </ng-container>
  `,
})
export class GraphicHashMapComponent<K, V> {
  @Input() map?: Map<K, V>;
  @Input() key?: K;

  get dataSet(): { key: K; value: V }[] {
    if (this.map) {
      const dataSet: { key: K; value: V }[] = [];
      this.map.forEach((value, key) => {
        dataSet.push({ key, value });
      });
      return dataSet;
    }
    return [];
  }
}
