const camelCase = function(input) {
  
  const strArr = input.split(" ");
  let camelStr = strArr[0];

  for (let word of strArr) {
    let upperWord = word.charAt(0).toUpperCase() + word.slice(1);

    if (word !== strArr[0]) {
      camelStr += upperWord
    }
  }

  return camelStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));