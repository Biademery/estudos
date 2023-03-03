// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//    comment () {
//     return `${this.name} comentou`
//    }
// }

function Student(name, email) {
  this.name = name;
  this.email = email;
}

Student.prototype.login = function () {
  return `${this.name} fez login`;
};

Student.prototype.comment = function () {
  return `${this.name} comentou`;
};

function formatDatabase(aString) {
  return aString.toUpperCase().replaceAll('', '_');
}

const biaDemery = new Student('Bia Demery', 'oi@biademery.com.br');
const arthurVasconcellos = new Student(
  'Arthur Vasconcellos',
  'oi@arthur.com.br',
);

console.log(biaDemery, arthurVasconcellos);
console.log(biaDemery.login === arthurVasconcellos.login);
console.log(Student.formatDatabase);
