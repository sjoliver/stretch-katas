const repeatNumbers = function(data) {

  let repeatStr = "";
  
  for (let subArr of data) {

    let result = "";
    let number = subArr[0].toString();
    let repeats = subArr[1];

    while (repeats > 0) {
      result += number;
      repeats--;
    }

    if (data.length > 1) {
      if (data[data.length - 1]) {
        repeatStr += result
      }
      repeatStr += result + ", "
    } else {
      repeatStr += result
    }

  }

  const slicedStr = repeatStr.slice(0, -2)
  return slicedStr;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
