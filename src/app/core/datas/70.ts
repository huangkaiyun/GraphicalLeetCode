import { Problem } from '@core/types';
import { Graphic70 } from '@core/graphics/70.component';

export const problem70: Problem = {
  id: 70,
  leetcode: 'https://leetcode.com/problems/climbing-stairs/',
  difficulty: 'easy',
  type: 'dynamic-programming',
  examples: [
    {
      input: [2],
      output: 2,
    },
    {
      input: [3],
      output: 3,
    },
  ],
  solutions: {
    typescript: `
function climbStairs(n: number): number {
  if(n < 3) return n;
  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;

  for(let i = 2; i < n; ++i)
  {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic70,
};
