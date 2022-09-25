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
    { label: 'linked-list', icon: 'link' },
    { label: 'two-pointers', icon: 'aim' },
    { label: 'binary-tree', icon: 'apartment' },
  ];

  getById(id: number) {
    return this.all.find((problem) => problem.id === id);
  }

  constructor() {}
}
