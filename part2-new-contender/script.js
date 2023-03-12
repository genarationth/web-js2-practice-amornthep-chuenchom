console.log("Challenge 1: Create an Age Calculator");
function ageCalculator(birthYear, futureYear) {
  ages = futureYear - birthYear;
  return ages;
}

const birthYear = 1995;
const futureYear = 2049;
console.log(
  `In ${futureYear}, you'll be ${ageCalculator(
    birthYear,
    futureYear
  )} years old.`
); // New Year's Day 2049, you'll be 54 years old.
console.log("------------------------------------------------------------");

console.log("Challenge 2: Create an information card");
const fullName = "Eric Cartman";
const country = "South Park";
const hobby =
  "insulting, harassing and ostracizing people, especially ethnic and racial minorities.";

const card = `Hi, my name is ${fullName}. I live in ${country} and enjoy ${hobby}`;
console.log(card);
console.log("------------------------------------------------------------");
