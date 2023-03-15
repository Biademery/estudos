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

function TeacherAssistent(name, email, scheduledWeekPosts) {
  Student.call(this, name, email);
  this.scheduledWeekPosts = scheduledWeekPosts;
}

TeacherAssistent.prototype = Object.create(Student.prototype);

TeacherAssistent.prototype.giveBadge = function giveBadge({ name }) {
  return `${this.name} deu uma medalha para ${name}`;
};

const biaDemery = new Student('Bia Demery', 'oi@biademery.com.br');
const arthurVasconcellos = new Student(
  'Arthur Vasconcellos',
  'oi@arthur.com.br',
  false,
);

console.log(biaDemery, arthurVasconcellos);
