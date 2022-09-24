import { Injectable } from '@angular/core';
import { ProblemList } from '@core/datas';
import { Problem, ProblemType } from '@core/types';

@Injectable({
  providedIn: 'root',
})
export class ProblemsService {
  all: Problem[] = ProblemList;
  types: { label: ProblemType; icon: string }[] = [
    { label: 'hash-table', icon: 'table' },
    { label: 'math', icon: 'number' },
    { label: 'dynamic-programming', icon: 'play-circle' },
  ];

  getById(id: number) {
    return this.all.find((problem) => problem.id === id);
  }

  constructor() {}
}
