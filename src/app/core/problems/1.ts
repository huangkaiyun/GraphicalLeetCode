import { Problem } from '@core/types';

export const problem1: Problem = {
  id: 1,
  leetcode: 'https://leetcode.com/problems/two-sum/',
  difficulty: 'easy',
  type: 'hash-table',
  examples: [
    {
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      input: [[3, 3], 6],
      output: [0, 1],
    },
  ],
  solutions: {
    'c#': `public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var dic = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; ++i){
            int j = 0;
            if(dic.TryGetValue(target - nums[i], out j)) return new int[]{i, j};
            dic[nums[i]] = i;
        }
        return null;
    }
}
    `,
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
    `,
    typescript: `function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (diff in map) {
      const secondIndex = map[diff];
      return [i, secondIndex];
    }

    map[num] = i;
  }
  return [];
}
`,
  },
};
