/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let has = new Set();
  let mergeList = list1;
  for (let i = 0; i < list2.length; i++) {
    if (!has.has(mergeList[i])) {
      has.add(list2[i], true);
      mergeList.push(list2[i]);
    }
  }
  return mergeList.sort((a, b) => a - b);
};

const list1 = [11];
const list2 = [0];
const result = mergeTwoLists(list1, list2);
console.log(result);
