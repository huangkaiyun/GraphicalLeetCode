import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemsService } from '@core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  data: {
    icon: string;
    title: string;
    submenu: { number: number; title: string; route: string }[];
  }[];

  open(submenu: { title: string; route: string }[]): boolean {
    return !!submenu.find(({ route }) => this.router.isActive(route, true));
  }

  constructor(
    private router: Router,
    private problemsService: ProblemsService
  ) {
    this.data = this.problemsService.types.map((menu) => ({
      title: menu.label,
      icon: menu.icon,
      submenu: this.problemsService.all
        .filter(({ type }) => type === menu.label)
        .map(({ id }) => ({
          number: id,
          title: `problem.${id}.title`,
          route: `/problem/${id}`,
        })),
    }));
  }

  ngOnInit(): void {}
}
