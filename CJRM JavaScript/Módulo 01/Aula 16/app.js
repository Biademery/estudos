// Arrays
let heroes = ["Batman", "Catwoman", "Iron Man"];

heroes[2] = "Spider Man";

const ages = [31, 22, 23, 40];
const randomArray = ["Parker", "Diana", 19, 18];

// Métodos de arrays
const joinHeroes = heroes.join(", ");
const indexOf25 = ages.indexOf("25");
const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
const pushToHeroes = heroes.push(["Cyclops", "Hulk"]); // altera a string original
const popHeroes = heroes.pop(); //remove o ultimo item e retorna ele

console.log(popHeroes);
