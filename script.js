let js = 'amazing';
if(js === 'amazing') alert('Javascript is Fun');

console.log(40+8+23-10);

// let age =30;
// age = 30;

// var job = 'coder';
// job = 'teacher';

// not good idea
// lastName = 'Richardson';
// console.log(lastName);


const now = 2037;
const ageAlice = now - 1991;
const ageSara = now - 2018;
console.log(ageAlice, ageSara);

console.log(ageAlice * 2, ageAlice / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Alice';
const lastName = 'Richardson';
console.log(firstName + ' ' + lastName);


//Assignment operators
// let x = 10 + 5; //15
// x += 10; // reassign variable x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--; // x = x - 1 = 199
// console.log(x);

//Comparison operators
// console.log(ageAlice > ageSara); // comparison operators is the boolean // >, <, >=,<=
// console.log(ageSara >= 18);
// // we will store the results in variables

// const isFullAge = ageSara >= 18;

// console.log(now - 1991 > now - 2018);


// let x,y;
// x = y = 25 - 10 - 5 // left to right x = y = 10, = right to left x = 10, y = 10
// console.log(x, y)

// const averageAge = (ageAlice + ageSara) / 2;
// console.log(ageAlice, ageSara, averageAge);


const age = 15;

// condition will be a boolean
if(age >= 18) {
    console.log('Sara can start apply driving license 🚗 ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too yound. Wait another ${yearsLeft} years.`)
}
