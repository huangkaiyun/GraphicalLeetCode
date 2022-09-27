import { Problem } from '@core/types';
import { Graphic100 } from '@core/graphics';

export const problem100: Problem = {
  id: 100,
  leetcode: 'https://leetcode.com/problems/same-tree/',
  difficulty: 'easy',
  type: 'binary-tree',
  examples: [
    {
      input: [
        [1, 2, 3],
        [1, 2, 3],
      ],
      output: true,
    },
    {
      input: [
        [1, 2],
        [1, null, 2],
      ],
      output: false,
    },
    {
      input: [
        [1, 2, 1],
        [1, 1, 2],
      ],
      output: false,
    },
  ],
  solutions: {
    typescript: `
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// 1. Recursion
function isSameTree1(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null || q === null) return p === null && q === null;

  if(p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 2. Stack
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  try{
      const stackP = [p];
      const stackQ = [q];

      while(stackP.length) {
          const nodeP = stackP.pop();
          const nodeQ = stackQ.pop();

          if(nodeP === null || nodeQ === null) return nodeP === nodeQ;
          if(nodeP.val !== nodeQ.val) return false;
          if(nodeP.left !== null || nodeQ.left !== null) {
              stackP.push(nodeP.left);
              stackQ.push(nodeQ.left);
          }
          if(nodeP.right !== null || nodeQ.right !== null) {
              stackP.push(nodeP.right);
              stackQ.push(nodeQ.right);
          }
      }
      return true;

  } catch (error){
      return false;
  }
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic100,
};
