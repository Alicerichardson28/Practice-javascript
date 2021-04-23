// let country = 'Thailand';
// let continent = 'Chonburi';
// let population = '60,000,000'

// console.log(country)
// console.log(continent)
// console.log(population)
// console.log(typeof country)


// //  code challenge 

// // const marksMass = 78;
// // const marksHeight = 1.69;

// // const johnMass = 92;
// // const johnHeight = 1.95;

// const marksMass = 95;
// const marksHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

// // Calculate both their BMIS
// const bmiMarksResult = marksMass / marksHeight ** 2;
// const bmiJohnResult = johnMass / (johnHeight * johnHeight);

// // create boolean variable
// const markHigherBMI = (bmiMarksResult > bmiJohnResult);

// console.log(bmiMarksResult, bmiJohnResult);
// console.log(markHigherBMI);

// // second coding challenge
// if(bmiMarksResult > bmiJohnResult){
//     console.log(`Mark's BMI (${bmiMarksResult}) is higher than John's!`)
// } else {
//     console.log(`John's BMI (${bmiMarksResult}) is higher than Mark's!`)
// }


// const dolphinsScore = (96+ 108 + 89) / 3
// const koalasScore = (88+ 91 + 110) / 3

// if(dolphinsScore > koalasScore) {
//     console.log('Dolphins win the trophy');
// } else if ( koalasScore > dolphinsScore){
//     console.log('Koalas win the trophy');
// } else if (dolphinsScore === koalasScore){
//     console.log('Dolphins and Koalas both win the trophy')
// }

// const dolphinsScore = (97+ 112 + 81) / 3
// const koalasScore = (109+ 95 + 86) / 3


// console.log(dolphinsScore)
// console.log(koalasScore)

// if(dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins win the trophy');
// } else if ( koalasScore > dolphinsScore && koalasScore >= 100){
//     console.log('Koalas win the trophy');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >=100){
//     console.log('Dolphins and Koalas both win the trophy')
// } else {
//     console.log('No one wins the trophy')
// }

// const dolphinsScore = (97+ 112 + 80) / 3
// const koalasScore = (109+ 95 + 50) / 3


// console.log(dolphinsScore)
// console.log(koalasScore)

// if(dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins win the trophy');
// } else if ( koalasScore > dolphinsScore && koalasScore >= 100){
//     console.log('Koalas win the trophy');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >=100){
//     console.log('Dolphins and Koalas both win the trophy')
// } else {
//     console.log('No one wins the trophy')
// }

// const dolphinsScore = (97+ 112 + 101) / 3
// const koalasScore = (109+ 95 + 106) / 3

// console.log(dolphinsScore)
// console.log(koalasScore)

// if(dolphinsScore > koalasScore) {
//     console.log('Dolphins win the trophy');
// } else if ( koalasScore > dolphinsScore){
//     console.log('Koalas win the trophy');
// } else if (dolphinsScore === koalasScore){
//     console.log('Dolphins and Koalas both win the trophy')
// }


const tipFifteen = 15/100
const tipTwenty = 20/100
const bill = 275;

// if( bill >= 50 && bill <= 300){
//     console.log(bill * tipFifteen)
// } else {
//     console.log(bill * tipTwenty)
// }


const tip = bill <= 300 && bill >= 50 ? bill * tipFifteen : tipTwenty;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)