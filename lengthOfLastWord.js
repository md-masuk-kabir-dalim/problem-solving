function lengthOfLastWord(s) {
  let i = s.length - 1;
  let length = 0;

  while (i >= 0 && s[i] === " ") {
    console.log(i);
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    console.log(s[i]);
    console.log(i);
    length++;
    i--;
  }

  return length;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
