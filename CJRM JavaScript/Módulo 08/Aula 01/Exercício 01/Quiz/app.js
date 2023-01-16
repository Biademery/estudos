const form = document.querySelector('form');
const finalResult = document.querySelector('.result');

const correctAnswers = ['D', 'A', 'C', 'B'];

let score = 0;

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  return userAnswers;
};

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo(0, 0);
  finalResult.classList.remove('d-none');
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalResult.querySelector('span').textContent = `${counter}%`;
    counter++;
  }, 10);
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const userAnswers = getUserAnswers();

  calculateUserScore(userAnswers);

  showFinalScore();

  animateFinalScore();
});
