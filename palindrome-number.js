function isPalindrome(number) {
  const reverse = Number(String(number).split("").reverse().join(""));
  if (number === reverse) {
    return true;
  } else {
    return false;
  }
}

const result = isPalindrome(10);
console.log(result);
