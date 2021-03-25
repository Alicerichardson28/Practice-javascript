const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite)
console.log(typeof favorite)

if (favorite === 18) {
    console.log('Cool! 18 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 18 or 7')
}


if (favorite !== 18) console.log('Why not 18');
