const myAge = 20; // Sets variable as my age
const myName = 'Kaia Scheirman'.toLowerCase();

let earlyYears = 2; // the first 2 years
let laterYears = myAge - 2; // After 2 years
earlyYears = earlyYears * 10.5;
laterYears = laterYears * 4; // Dog years

let myAgeInDogYears = earlyYears + laterYears; // Calculates your age in dog years

console.log(earlyYears);
console.log(laterYears);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
