function romanToInt(s) {
  const roman_map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = roman_map[s[i]];
    const next = roman_map[s[i + 1]];
    console.log(current, next);
    if (next > current) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }

  return sum;
}

const result = romanToInt("LVIII");
console.log(result);
