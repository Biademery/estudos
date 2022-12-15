// variáveis e escopo de bloco

const age = 31;

if (true) {
  const age = 41;
  const name = 'Bia';

  console.log(`fora do 1º bloco de códigos: ${age} ${name}`);

  if (true) {
    const age = 51;
    console.log(`fora do 2º bloco de códigos: ${age}`);
  }
}

console.log(`fora do bloco de códigos: ${age} ${name}`);
