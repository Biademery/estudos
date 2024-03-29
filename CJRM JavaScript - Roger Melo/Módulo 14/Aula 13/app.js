class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(`${this.name} logou na aplicação`);
    return this;
  }

  logout() {
    return `${this.name} deslogou na aplicação`;
  }

  addPoint() {
    this.points++;
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`;
  }
}

const user = new User('Bia', 'oi@bia.com.br');
const user2 = new User('Arthur', 'oi@arthur.com.br');

user.login().addPoint();

console.log(user, user2);
