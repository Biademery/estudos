// function myFunc() {
//   const cat = 'Zeca';

//   const age = 3;

//   const color = 'cinza';

//   console.log(age);
// }

// function myFunc2() {
//   const cat = 'Miau';

//   const age = 5;

//   const color = 'Branco';

//   console.log(age);
// }

// myFunc();
// myFunc2();

const dog = 'Pastor-alemão';

function dogWatch() {
  const dog = 'Samoieda';
  console.log(dog);
}

dogWatch();
console.log(dog);

if (true) {
  const dragon = 'Balerion';
  console.log(dragon);
}

console.log(dragon);

const external = () => {
  const book = 'Sapiens';

  const internal = () => {
    // const x = 10;
    console.log(book.toLocaleUpperCase());
  };

  internal();
  //   console.log(x);
};
