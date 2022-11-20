// Argumentos, parâmetros e default parameters
const myFunc = function (name = "Fulano", lastName = "Da Silva") {
  console.log(`Oi, ${name} ${lastName}!`);
};

myFunc();
myFunc("Bia", "D'Emery");
