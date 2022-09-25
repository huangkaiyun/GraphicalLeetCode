import { Problem } from '@core/types';
import { Graphic94 } from '@core/graphics';

export const problem94: Problem = {
  id: 94,
  leetcode: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
  difficulty: 'easy',
  type: 'binary-tree',
  examples: [
    {
      input: [[1, null, 2, 3]],
      output: [1, 3, 2],
    },
    {
      input: [[]],
      output: [],
    },
    {
      input: [[1]],
      output: [1],
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
function inorderTraversal1(root: TreeNode | null): number[] {
    if(root === null) return [];

    let array: number[] = [];
    if(root.left) {
        array = array.concat(inorderTraversal(root.left));
    }
    array.push(root.val);
    if(root.right) {
        array = array.concat(inorderTraversal(root.right));
    }
    return array;
};

// 2. Stack
function inorderTraversal(root: TreeNode | null): number[] {
  if(root === null) return [];
  const array: number[] = [];
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  while(current || stack.length)
  {
      while(current) {
        stack.push(current);
        current = current.left;
      }

      const node = stack.pop();
      array.push(node.val);

      if(node.right){
          current = node.right;
      }
  }
  return array;
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic94,
};
