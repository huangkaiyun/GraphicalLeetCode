import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeetcodeLinkComponent } from './leetcode-link.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LeetcodeLinkComponent],
  imports: [CommonModule, NzButtonModule],
  exports: [LeetcodeLinkComponent],
})
export class LeetcodeLinkModule {}
