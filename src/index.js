module.exports = function reverse (n) {
  let str = n.toString();
  let result = "";
  for (i=str.length-1; i>=0; i--) {
    result = result + str[i];
  }
//   console.log(result);
  return Number.parseInt(result);
}
