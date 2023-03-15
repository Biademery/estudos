// criando objeto literal
const user = {
  name: 'Chavez',
  age: '18',
  email: 'chavez@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login() {
    console.log('Usuário logado');
  },
  logout() {
    console.log('Usuário deslogado');
  },
};

console.log(user.name);

user.age = 32;

console.log(user.age);

// console.log(user['name'])
console.log(typeof user);
