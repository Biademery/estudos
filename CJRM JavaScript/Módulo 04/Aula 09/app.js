// valores primitivos

let scoreOne = 50;

const scoreTwo = scoreOne;

console.log(`Score: ${scoreOne} | scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`Score: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// valores de referência

const userOne = { name: 'Bia', age: 22 };

const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 23;

console.log(userOne, userTwo);
