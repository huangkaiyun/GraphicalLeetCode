import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor() {}

  resetCollapsed() {
    if (window.innerWidth <= 768) this.isCollapsed = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resetCollapsed();
  }

  ngOnInit(): void {
    this.resetCollapsed();
  }
}
