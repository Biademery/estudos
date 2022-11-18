// operadores lógicos - "OU" || e "E" &&
const password = "oi123";

if (password.length >= 12 && password.includes("1")) {
  console.log("senha muito forte =)");
} else if (password.length >= 8 || password.includes("1")) {
  console.log("essa senha tem 8 ou mais caracteres");
} else {
  console.log("a senha deve conter 8 ou mais caracteres");
}
