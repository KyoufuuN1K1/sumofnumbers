function sumFor(list) {
  let total = 0;
  for (let num = 0; num < list.length; num++) {
    total += list[num];
  }

  return total;
}
function sumWhile(list) {
  let num = 0;
  let total = 0;
  while (num < list.length) {
    total += list[num];
    num++;
  }
  return total;
}
function sumRecursion(list) {
  const num = 0;
  if (list.length === 0) {
    return 0;
  }
  return list[num] + sumRecursion(list.slice(1, list.length));
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (x, y) { return x + y; });
}
const list = [1, 2, 3, 4];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
