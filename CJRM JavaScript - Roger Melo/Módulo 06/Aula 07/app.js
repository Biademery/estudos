const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', event => {
  event.preventDefault();

  const username = event.target.username.value;
  const regex = /^[a-zA-Z]{6,12}$/;
  const result = regex.test(username);

  if (result) {
    feedback.textContent = 'username válido =)';
    return;
  }

  feedback.textContent =
    'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras';

  console.log(result);
});
