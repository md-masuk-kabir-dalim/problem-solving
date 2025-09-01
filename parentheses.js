/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
        console.log(stack);
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
};
console.log(isValid("([{]"));
