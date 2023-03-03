class User {
  #counter = 0

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  incrementCounter () {
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0

  return{
    name,
    email,
    incrementCounter: () => ++counter
  }
}

const user = new User('Bia', 'oi@bia.com.br')
const user2 = createUser('Bia', 'oi@bia.com.br')
const user3 = createUser('Bia 2', 'oi2@bia.com.br')

console.log(user, user3, user2)

// class a {
//   first() {
//     return 1;
//   }

//   second() {
//     return 'nãooooo!';
//   }
// }

// class b extends a {
//   third() {
//     return 3;
//   }
// }

// const obj = new b();

// const a = {
//   first() {
//     return 1;
//   },
// };

// const b = {
//   second() {
//     return 'nãoooooo!';
//   },
// };

// const c = {
//   third() {
//     return 3;
//   },
// };

// const obj = {
//   ...a
//   ...c
// };
// console.log(obj.second());
