const charCount = (str) => {
  let charList = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charList[str[i]]) {
      charList[str[i]]++;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
};

console.log(charCount("hi how are you. i am fine and you"));
