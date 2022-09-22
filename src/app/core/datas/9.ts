import { Graphic9 } from '@core/graphics';
import { Problem } from '@core/types';

export const problem9: Problem = {
  id: 9,
  leetcode: 'https://leetcode.com/problems/palindrome-number/',
  difficulty: 'easy',
  type: 'math',
  examples: [
    {
      input: [121],
      output: true,
    },
    {
      input: [-121],
      output: false,
    },
    {
      input: [10],
      output: false,
    },
  ],
  solutions: {
    typescript: `
// 1. to string
function isPalindrome1(x: number): boolean {
  return (x + '').split('').reverse().join('') === x + '';
};

// 2. math
function isPalindrome2(x: number): boolean {
  let reverse = 0;
  let temp = x;
  while(temp > 0)
  {
    reverse = reverse * 10 + temp % 10;
    temp = Math.floor(temp / 10);
  }

  return x === reverse;
};

// 3.
function isPalindrome3(x: number): boolean {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let reverse = 0;
  
  while (x > reverse){
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reverse || x === Math.floor(reverse / 10);
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic9,
};
