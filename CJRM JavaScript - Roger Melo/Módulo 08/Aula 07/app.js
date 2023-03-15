const book = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O Milagre da manhã', price: 5 },
  { name: 'Alice no País das maravilhas', price: 10 },
  { name: 'Quem pensa enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 },
];

const filteredBooks = book
  .filter(({ price }) => price > 20)
  .map(
    ({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais`,
  );

console.log(filteredBooks);
