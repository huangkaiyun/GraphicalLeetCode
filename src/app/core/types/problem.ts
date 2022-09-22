import { Type } from '@angular/core';
import { BaseGraphicComponent } from '@features/graphic/base-graphic.component';

export type Problem = {
  id: number;
  leetcode: string;
  difficulty: Difficulty;
  type: ProblemType;
  solutions: Record<CodeLanguage, string>;
  examples: { input: any; output: any }[];
  component: Type<BaseGraphicComponent>;
};

export type ProblemType = 'hash-table' | 'math';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type CodeLanguage = 'c#' | 'typescript' | 'java';
