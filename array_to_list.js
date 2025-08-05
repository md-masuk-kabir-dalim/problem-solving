function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  const dummy = new ListNode(-1);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current == current.next;
  }

  return current.next;
}

const list1 = arrayToList([1, 3, 5]);
console.log(list1);
