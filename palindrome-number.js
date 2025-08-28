var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x >= 0 && x < 10) true;
  let original = x;
  let reverseNumber = 0;
  while (x > 0) {
    const digit = x % 10;
    reverseNumber = reverseNumber * 10 + digit;
    const revered = Math.floor(x / 10);
    x = revered;
  }
  if (original === reverseNumber) true;
  return false;
};

const result = isPalindrome(121);
console.log(result);
