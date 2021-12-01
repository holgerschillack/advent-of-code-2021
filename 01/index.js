const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("\nEntries in input: " + inputArray.length);

  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
  let counter = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const el = inputArray[i];
    const next = inputArray[i + 1];

    if (next - el > 0) {
      counter++;
    }
  }

  console.log("\n######### PART 1 #########");
  console.log(counter);
  console.log("##########################\n");
}

function solvePartTwo(inputArray) {
  let counter = 0;

  for (let i = 0; i < inputArray.length - 3; i++) {
    const el1 = parseInt(inputArray[i]);
    const el2 = parseInt(inputArray[i + 1]);
    const el3 = parseInt(inputArray[i + 2]);
    const el4 = parseInt(inputArray[i + 3]);

    const sum1 = el1 + el2 + el3;
    const sum2 = el2 + el3 + el4;

    if (sum2 - sum1 > 0) {
      counter++;
    }
  }

  console.log("######### PART 2 #########");
  console.log(counter);
  console.log("##########################\n");
}
