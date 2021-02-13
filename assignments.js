let country = 'Thailand';
let continent = 'Chonburi';
let population = '60,000,000'

console.log(country)
console.log(continent)
console.log(population)
console.log(typeof country)


//  code challenge 

// const marksMass = 78;
// const marksHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const marksMass = 95;
const marksHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

// Calculate both their BMIS
const bmiMarksResult = marksMass / marksHeight ** 2;
const bmiJohnResult = johnMass / (johnHeight * johnHeight);

// create boolean variable
const markHigherBMI = (bmiMarksResult > bmiJohnResult);

console.log(bmiMarksResult, bmiJohnResult);
console.log(markHigherBMI);

// second coding challenge
if(bmiMarksResult > bmiJohnResult){
    console.log(`Mark's BMI (${bmiMarksResult}) is higher than John's!`)
} else {
    console.log(`John's BMI (${bmiMarksResult}) is higher than Mark's!`)
}