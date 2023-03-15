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

user.login();
user.logout();
