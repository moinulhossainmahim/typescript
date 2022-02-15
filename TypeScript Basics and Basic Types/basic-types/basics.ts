function add(num1: number, num2: number, isShowResult: boolean, resultString) {
  if (isShowResult) {
    const result = num1 + num2;
    console.log(resultString + result);
  } else {
    return num1 + num2;
  }
}

const num1 = 10;
const num2 = 5;
const isShowResult = true;
const resultString = "Result is: ";

add(num1, num2, isShowResult, resultString);
