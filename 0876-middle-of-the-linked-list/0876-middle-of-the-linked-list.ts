/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let temp: ListNode = head;
    let cnt: number = 0;
    while(temp){
        cnt++;
        temp = temp.next;
    }
    let midCnt: number = cnt % 2 === 0 ? cnt / 2 : Math.floor(cnt / 2)
    
    let temp1: ListNode = head;
    while(midCnt != 0){
        midCnt--;
        head = head.next;
    }
    return head;
};