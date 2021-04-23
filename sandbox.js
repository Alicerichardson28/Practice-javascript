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

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples')
        break;
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not a valid day!')
}


if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory video');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples')
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' ||  day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}