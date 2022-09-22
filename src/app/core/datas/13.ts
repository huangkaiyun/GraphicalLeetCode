import { Graphic13 } from '@core/graphics';
import { Problem } from '@core/types';

export const problem13: Problem = {
  id: 13,
  leetcode: 'https://leetcode.com/problems/roman-to-integer/',
  difficulty: 'easy',
  type: 'hash-table',
  examples: [
    {
      input: ['III'],
      output: 3,
    },
    {
      input: ['LVIII'],
      output: 58,
    },
    {
      input: ['MCMXCIV'],
      output: 1994,
    },
  ],
  solutions: {
    typescript: `
function romanToInt(s: string): number {
  const hashMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;

  for (let i = 0; i < s.length; ++i) {
    const value = hashMap.get(s[i]) || 0;
    if (i !== s.length - 1 && value < hashMap.get(s[i + 1])!) {
      result -= value;
    } else {
      result += value;
    }
  }
  return result;
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic13,
};
