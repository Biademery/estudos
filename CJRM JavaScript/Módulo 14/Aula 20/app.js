// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

function Student(name, email) {
  this.name = name;
  this.email = email;

  this.login = function () {
    return `${this.name} fez login`;
  };
}

const biaDemery = new Student('Bia Demery', 'oi@biademery.com.br');
const arthurVasconcellos = new Student(
  'Arthur Vasconcellos',
  'oi@arthur.com.br',
);

console.log(biaDemery, arthurVasconcellos);
