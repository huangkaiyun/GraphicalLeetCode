export class ListNode {
  val: number;
  next: ListNode | null;

  constructor();
  constructor(arr: number[]);
  constructor(val: number, next: ListNode | null);
  constructor(...arg: any) {
    if (arg.length === 2) {
      this.val = arg[0];
      this.next = arg[1];
    } else if (arg.length === 1 && arg[0].length > 0) {
      const arr = [...arg[0]];
      this.val = arr[0];
      arr.shift();
      this.next = arr.length ? new ListNode(arr) : null;
    } else {
      this.val = 0;
      this.next = null;
    }
  }

  toArray(): number[] {
    const arr: number[] = [];
    let head: ListNode | null = this;
    while (head !== null) {
      arr.push(head.val);
      head = head.next;
    }
    return arr;
  }
}
