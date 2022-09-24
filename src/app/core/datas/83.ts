import { Problem } from '@core/types';
import { Graphic83 } from '@core/graphics';

export const problem83: Problem = {
  id: 83,
  leetcode: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/',
  difficulty: 'easy',
  type: 'linked-list',
  examples: [
    {
      input: [[1, 1, 2]],
      output: [1, 2],
    },
    {
      input: [[1, 1, 2, 3, 3]],
      output: [1, 2, 3],
    },
  ],
  solutions: {
    typescript: `
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
   if(head === null) return null;
   if(head.next) {
       if(head.val === head.next.val){
           head.next = head.next.next;
           deleteDuplicates(head);
       } else {
           deleteDuplicates(head.next);
       }
   }
   return head;
};
    `,
    'c#': ``,
    java: ``,
  },
  component: Graphic83,
};
