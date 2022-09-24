import { Problem } from '@core/types';
import { Graphic88 } from '@core/graphics';

export const problem88: Problem = {
  id: 88,
  leetcode: 'https://leetcode.com/problems/merge-sorted-array/',
  difficulty: 'easy',
  type: 'two-pointers',
  examples: [
    {
      input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
      output: [1, 2, 2, 3, 5, 6],
    },
    {
      input: [[1], 1, [], 0],
      output: [1],
    },
    {
      input: [[0], 0, [1], 1],
      output: [1],
    },
  ],
  solutions: {
    typescript: `
/**
 Do not return anything, modify nums1 in-place instead.
  */
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
    const result = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);
    result.forEach((num, index) => {
       nums1[index] = num;
    });
};

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let indexM = m - 1;
    let indexN = n - 1;

    for(let i = m + n - 1; i >= 0; --i)
    {
        if(indexN < 0) return;
        if(indexM >= 0 && nums1[indexM] > nums2[indexN])
        {
            nums1[i] = nums1[indexM];
            indexM--;
        } else {
            nums1[i] = nums2[indexN];
            indexN--;
        }
    }
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic88,
};
