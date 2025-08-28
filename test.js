var reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  const reversedStr = Math.abs(x).toString().split("").reverse(-1).join("");
  const reversedInt = sign * Number(reversedStr);
  if (reversedInt < -(2 ** 31) || reversedInt > 2 ** 31 - 1) {
    return 0;
  }

  return reversedInt;
};

const result = reverse(120); un
console.log(result);
