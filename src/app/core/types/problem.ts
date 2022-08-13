export type Problem = {
  id: number;
  leetcode: string;
  difficulty: Difficulty;
  type: ProblemType;
};

export type ProblemType = 'hash-table';
export type Difficulty = 'easy' | 'medium' | 'hard';
