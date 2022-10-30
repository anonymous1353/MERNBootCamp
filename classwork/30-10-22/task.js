let convertor = (number, char) => {
  if (char == "C") {
    return number * 1.8 + 32;
  } else if (char == "F") {
    return (number - 32) / 1.8;
  } else return false;
};

console.log(convertor(33.3332, "C"));

let square = (number) => {
  return number ** 2;
};
console.log(square(8));

let divide = (number1, number2) => {
  return number1 / number2;
};
console.log("the ans is " + divide(8, 4));
