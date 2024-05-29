let fatherAge = parseInt(prompt("Enter the age of your father:"));
let motherAge = parseInt(prompt("Enter the age of your mother:"));
let brotherAge = parseInt(prompt("Enter your brother:"));
let yourAge = parseInt(prompt("Enter your age:"));
let familyAgeAverage = (fatherAge + motherAge + yourAge + brotherAge) / 3;
document.write("<h2>Family Age Average:</h2>");
document.write("<h3>The average age of your family is: " + familyAgeAverage.toFixed(2) + "</h3>");