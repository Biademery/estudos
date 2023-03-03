class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user = new User('Bia', 'oi@bia.com.br');
const user2 = new User('Arthur', 'oi@arthur.com.br');

console.log(user, user2);
