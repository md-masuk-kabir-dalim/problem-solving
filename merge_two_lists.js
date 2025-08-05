function mergeTwoLists(list1, list2) {
  let has = new Set();
  let mergeList = [];
  for (let i = 0; i < list1.length; i++) {
    if (!has.has(list2[i])) {
      has.add(list1[i], true);
      mergeList.push(list2[i]);
    }
  }
  for (let i = 0; i < list2.length; i++) {
    if (!has.has(list2[i])) {
      has.add(list2[i], true);
      mergeList.push(list2[i]);
    }
  }
  return mergeList.sort((a, b) => a - b);
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const result = mergeTwoLists(list1, list2);
console.log(result);
