import { ProblemsService } from '@core/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Problem } from '@core/types';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.less'],
})
export class ProblemComponent implements OnInit {
  problem?: Problem;

  constructor(
    private route: ActivatedRoute,
    private problemsService: ProblemsService
  ) {}

  ngOnInit(): void {
    const problemId = this.route.snapshot.paramMap.get('id');
    this.problem = this.problemsService.getById(Number(problemId));
  }
}
