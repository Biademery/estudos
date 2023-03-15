localStorage.setItem('name', 'Bia');
localStorage.setItem('age', 23);

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
