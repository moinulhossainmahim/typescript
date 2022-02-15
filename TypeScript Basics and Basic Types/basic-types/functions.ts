// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// printResult(add(10, 7));

let combineValues: (a: number, b: number) => number;

// combineValues = add;
// combineValues = printResult;

// console.log(combineValues(10, 20));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
