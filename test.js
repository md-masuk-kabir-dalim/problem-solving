// var reverse = function (x) {
//   const sign = x < 0 ? -1 : 1;
//   const reversedStr = Math.abs(x).toString().split("").reverse(-1).join("");
//   const reversedInt = sign * Number(reversedStr);
//   if (reversedInt < -(2 ** 31) || reversedInt > 2 ** 31 - 1) {
//     return 0;
//   }

//   return reversedInt;
// };

// const result = reverse(120); un
// console.log(result);

const getNumber = (arr) => {
  let smallNumber = Infinity;
  let largeNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
      if (largeNumber < element) {
        largeNumber = element;
      }
      if (smallNumber > element) {
        smallNumber = element;
      }
    }
  }

  return {
    smallNumber,
    largeNumber,
  };
};

console.log(getNumber([1, 2, 3, 9, 8, 5, 7, "error", 129, 12, 54, 0]));
