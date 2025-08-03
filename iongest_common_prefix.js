const strs = ["flower", "flow", "flight"];
function longestCommonPrefix(strs) {
  let commonPrefix = strs[0].split("");

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i].split("");
    let temp = [];
    for (let s = 0; s < str.length; s++) {
      if (commonPrefix[s] === str[s]) {
        temp.push(commonPrefix[s]);
      } else {
        break;
      }
    }
    commonPrefix = temp;
  }
  return commonPrefix.join("");
}

const result = longestCommonPrefix(strs);

console.log(result);
