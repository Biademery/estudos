const maquina = {
  material: "Aço inox",
  equipamentos: ["motor", "freio", "esteira", "cilindro"],
  vaiMontada: false,
  numeroDeMotores: 1,
};

console.log(maquina);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos);
console.log(maquina.material);
for (let i = 0; i < maquina.equipamentos.length; i++) {
  console.log(maquina.equipamentos[i]);
}

if (maquina.vaiMontada == false) {
  console.log("O comprador precisa montar a máquina");
}
