// palavra-chave this
const user = {
  name: 'Chavez',
  age: '18',
  email: 'chavez@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frnago', likes: 30 },
    { title: '4 receitas de purê de batata', likes: 50 },
  ],
  login() {
    console.log('Usuário logado');
  },
  logout() {
    console.log('Usuário deslogado');
  },
  logBlogPosts() {
    console.log(`${this.blogPosts} escreveu os seguintes posts:`);

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes);
    });
  },
};

user.logBlogPosts();
