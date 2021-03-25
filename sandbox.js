// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 18) {
//     console.log('Cool! 18 is an amazing number!')
// } else if (favorite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 18 or 7')
// }


// if (favorite !== 18) console.log('Why not 18');


const hasDriversLicense = true; //A
const hasGoodVision = true;//B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.');
} else  {
    console.log('someone else should drive...');
}