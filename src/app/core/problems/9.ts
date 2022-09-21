import { Problem } from '@core/types';

export const problem9: Problem = {
  id: 9,
  leetcode: 'https://leetcode.com/problems/palindrome-number/',
  difficulty: 'easy',
  type: 'math',
  solutions: {
    typescript: `
// 1. to string
function isPalindrome(x: number): boolean {
  return (x + '').split('').reverse().join('') === x + '';
};

// 2. math
function isPalindrome(x: number): boolean {
  let reverse = 0;
  let temp = x;
  while(temp > 0)
  {
    reverse = reverse * 10 + temp % 10;
    temp = Math.floor(temp / 10);
  }

  return x === reverse;
};
    `,
    'c#': ``,
    java: ``,
  },
};
