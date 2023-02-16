"use strict";

const dateObject = new Date();
const year = dateObject.getFullYear();

const userAge = Number(prompt(`Enter your age: `));

const ageValue = new Number(userAge);

if (userAge == ageValue) {
  const ageCalc = function (age) {
    return year - age;
  };
  console.log(`The year as of today is ${year}.`);
  console.log(`You entered your age as ${ageValue}.`);
  console.log(`You were born in the year ${ageCalc(userAge)}.`);
} else {
  console.log("Enter numbers only. Try again!");
}
