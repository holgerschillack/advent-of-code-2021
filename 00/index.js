const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n\r");
  console.log("Entries in input: " + inputArray.length);

  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
 
  console.log("\n######### PART 1 #########");
  console.log();
  console.log("##########################\n");
}

function solvePartTwo(inputArray) {
 
  console.log("######### PART 2 #########");
  console.log();
  console.log("##########################\n");
}