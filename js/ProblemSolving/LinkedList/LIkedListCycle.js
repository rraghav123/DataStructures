/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow_p = head;
  let fast_p = head;
  while (slow_p && fast_p && fast_p.next) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p === fast_p) {
      return 1;
    }
  }
  return false;
};
