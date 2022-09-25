export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  color: string = '#fff';

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static FromArray(array: number[]): TreeNode | null {
    if (array.length === 0) return null;
    const root: TreeNode | null = new TreeNode(array.shift(), null, null);
    const nodeList: TreeNode[] = [root];
    while (array.length && nodeList.length) {
      const node = nodeList.shift();
      const left = array.shift();
      if (left !== null) {
        node!.left = new TreeNode(left, null, null);
        nodeList.push(node!.left);
      }
      if (array.length) {
        const right = array.shift();
        if (right !== null) {
          node!.right = new TreeNode(right, null, null);
          nodeList.push(node!.right);
        }
      }
    }
    return root;
  }
}
