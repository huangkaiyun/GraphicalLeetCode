import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leetcode-link',
  templateUrl: './leetcode-link.component.html',
  styleUrls: ['./leetcode-link.component.less'],
})
export class LeetcodeLinkComponent implements OnInit {
  @Input() link?: string;
  constructor() {}

  ngOnInit(): void {}
}
