const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  //stdout = saida    /n= seria como o br no HTML
  process.stdout.write("\n" + questions[index] + " > ");
};

const answers = [];

ask();

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    console.log(answers);
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
      Massa Bia!
  
      O que você aprendeu hoje foi:
      ${answers[0]}
  
      O que te aborreceu hoje foi:
      ${answers[1]}

      O que você poderia melhorar hoje foi:
      ${answers[2]}
      
      O que te deixou feliz hoje foi:
      ${answers[3]}
      
      Você ajudou ${answers[4]} pessoas hoje!
      
      Volte amanhã para novas reflexões!
    `);
});
