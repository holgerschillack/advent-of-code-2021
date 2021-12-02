const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("\nEntries in input: " + inputArray.length + "\n");

  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
  let position = parseInt(0);
  let depth = parseInt(0);

  inputArray.forEach((el) => {
    const parts = el.split(" ");
    const command = parts[0];
    const count = parseInt(parts[1]);

    if (command === "forward") position += count;
    if (command === "down") depth += count;
    if (command === "up") depth -= count;
  });

  console.log("\n######### PART 1 #########");
  console.log(position * depth);
  console.log("##########################\n");
}

function solvePartTwo(inputArray) {
  let position = parseInt(0);
  let depth = parseInt(0);
  let aim = parseInt(0);

  inputArray.forEach((el) => {
    const parts = el.split(" ");
    const command = parts[0];
    const count = parseInt(parts[1]);

    if (command === "forward") {
      position += count;
      depth += aim * count;
    }
    if (command === "down") {
      aim += count;
    }
    if (command === "up") {
      aim -= count;
    }
  });

  console.log("######### PART 2 #########");
  console.log(position * depth);
  console.log("##########################\n");
}
