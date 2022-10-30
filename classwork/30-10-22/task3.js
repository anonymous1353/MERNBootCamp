let arr = [11, 2, 3, 4, 5];
//console.log(arr.reverse());
let array = [];
function reverse(abc) {
  for (var i = abc.length - 1; i >= 0; i--) {
    array[abc.length - 1 - i] = abc[i];
  }
  return array;
}

array = reverse(arr);
console.log(array);
